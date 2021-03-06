const allowedBrackets = new Map<string, string>();
allowedBrackets.set(')', '(');
allowedBrackets.set(']', '[');
allowedBrackets.set('}', '{');
const opening = Array.from(allowedBrackets.values());

const isBalanced = (s: string): string => {
  const brackets = s.split('');
  const queue: string[] = [];

  for (let bracket of brackets) {
    if (opening.includes(bracket)) {
      queue.push(bracket);
      continue;
    }

    const lastValue = queue.pop();

    if (lastValue !== allowedBrackets.get(bracket)) {
      return "NO";
    }
  }

  if (queue.length === 0) return "YES";

  return "NO";
}

const Main = () => {
  const input = [
    // '[()][{}()][](){}([{}(())([[{}]])][])[]([][])(){}{{}{[](){}}}()[]({})[{}{{}([{}][])}]',
    // '[()][{}[{}[{}]]][]{}[]{}[]{{}({}(){({{}{}[([[]][[]])()]})({}{{}})})}',
    // '(])[{{{][)[)])(]){(}))[{(})][[{)(}){[(]})[[{}(])}({)(}[[()}{}}]{}{}}()}{({}](]{{[}}(([{]',
    // '){[]()})}}]{}[}}})}{]{](]](()][{))])(}]}))(}[}{{)}{[[}[]',
    // '}(]}){',
    // '((]()(]([({]}({[)){}}[}({[{])(]{()[]}}{)}}]]{({)[}{(',
    // '{}{({{}})}[][{{}}]{}{}(){{}[]}{}([[][{}]]())',
    // '(){}[()[][]]{}(())()[[([])][()]{}{}(({}[]()))()[()[{()}]][]]',
    // '()([]({}[]){}){}{()}[]{}[]()(()([[]]()))()()()[]()(){{}}()({[{}][]}[[{{}({({({})})})}]])',
    // '[]([{][][)(])}()([}[}(})}])}))]](}{}})[]({{}}))[])(}}[[{]{}]()[(][])}({]{}[[))[[}[}{(]})()){{(]]){][',
    // '{()({}[[{}]]()(){[{{}{[[{}]{}((({[]}{}()[])))]((()()))}(()[[[]]])((()[[](({([])()}))[]]))}]})}',
    // '()(){{}}[()()]{}{}',
    // '{}()([[]])({}){({[][[][[()]]{{}[[]()]}]})}[](())((())[{{}}])',
    // '{}(((){}){[]{{()()}}()})[]{{()}{(){()(){}}}}{()}({()(()({}{}()((()((([])){[][{()}{}]})))))})',
    // '][[{)())))}[)}}}}[{){}()]([][]){{{{{[)}]]{([{)()][({}[){]({{',
    '{{}(',
    // '{[{((({}{({({()})()})[]({()[[][][]]}){}}))){}}]}{}{({((){{}[][]{}[][]{}}[{}])(())}[][])}',
    // '()[[][()[]][]()](([[[(){()[[]](([]))}]]]))',
    // '()[]({}{})(()){{{}}()()}({[]()}())[](){}(({()}[{}[{({{}}){({}){({})((({()})))}}}]]))',
    // '}[{){({}({)})]([}{[}}{[(([])[(}){[]])([]]}(]]]]{][',
    // '[{]{[{(){[}{}(([(]}])(){[[}(]){(})))}}{{)}}{}][({(}))]}({)',
    // ')})[(]{][[())]{[]{{}}[)[)}[]){}](}({](}}}[}{({()]]',
    // '[[[({[]}({[][[[[][[{(()[][])}()[][]][]{}]]]]}))][(()){}]]]()[{}([]{}){}{{}}]',
    // '({[]({[]})}())[][{}[{{(({{{([{}])}}}))}}]]',
    // '([((()))()])[][][]{}()(([]))[]()[]((){}[]){}(){{}[]}[[{[]}]]',
    // '[[(((({}{[]{}()}){}{{}}){({[]{[{}]{(){}(((){()}))}()}}[[]]()()[()])[[{}{}]()]}))]]{}[]{}({({{}})})',
    // '(]{()}((',
    // '[][(())[({{{()[]}}{[[][[][[[]{{{[()]{{{{}{[]}[][]}}}}}}]]]]}})]]',
    // '}[})})}[)]{}{)',
    // '({(}{})))}(}[)[}{)}}[)[{][{(}{{}]({}{[(})[{[({{[}{(]]})}',
    // ']}})[]))]{][])[}(])]({[]}[]([)',
    // '[{{}{[{{[}[[}([]',
    // '[([]){}][({})({[(([])[][])][[{}{([{{}{(()){{{({}{{}}())}}[]}}()[()[{{{([](()){[[[]]]})}}}]]}])}]]})]',
    // ']{}{(}))}](})[{]]()(]([}]([}][}{]{[])}{{{]([][()){{})[{({{{[}{}](]}}',
    // '{[{}}){(}[][)(}[}][)({[[{]}[(()[}}){}{)([)]}(()))]{)(}}}][',
    // '(]{}{(}}}[)[',
    // '[]{}{[[]]}([{}]{}[]){{(())}}',
    // '[)([{(][(){)[)}{)]]}}([((][[}}(]{}]]}]][(({{{))[[){}{]][))[]{]][)[{{}{()]){)])))){{{[(]}[}}{}]',
    // '{({(){[[[][]{}[[([]{})]{}]][[]()()]]}})}[{}{{}}]',
    // ')}][(})){))[{}[}',
    // '{[]{({]}[}}[{([([)([){{}{(}}[]}}[[{[}[[()(])[}[]',
    // '()()()[]',
    // '((){}])][]][}{]{)]]}][{]}[)(])[}[({(',
    // ')[((])(]]]]((]){{{{())]}]}(}{([}(({}]])[[{){[}]{{}})[){(',
    // '}][[{[((}{[]){}}[[[)({[)}]]}(]]{[)[]}{}(){}}][{()]))})]][(((}}',
    // '([]){}{{}{}}()([([{}{[[]()([(([]()))()[[]]])]}])])',
    // '[()[[]{{[]}()([])}[]][][]][]()[]{}{}[][]{}{}[()(){}]',
    // '{[{){]({(((({](]{([])([{{([])[}(){(]](]{[{[]}}())[){})}))[{})))[',
    // '{}[()[]][]{}{}[[{{[[({})]()[[()]]]}}]]',
    // '{[{}[][]]}[((()))][]({})[]{}{()}',
    // '(){[{({})}]}',
    // '([]])][{)]({)[]))}]())[}]))][}{(}}})){]}]{[)}(][})[[',
    // '((({{}(([{}(())]))[()]{[[[]()]]}})))',
    // '}()))}(}]]{{})}][{](]][{]{[[]]]}]]}([)({([))[[(]}])}[}(([{)[)]]([[](]}]}{]{{})[]){]}{])(',
    // '{}{}{}{[[()]][]}',
    // ')]}]({{})[[[{]{{{}}][))]{{',
    // '))){({}])}])}}]{)()(}(]}([',
    // '([[]][])[[]()][]()(([[]]{[()[]{[][{}]}[()]]{}{[]}}{{}()}(()[([][]{})[[{}][]]{}[]])))',
    // '(]{[({}[){)))}]{[{}][({[({[]))}[}]}{()(([]{]()}})}[]{[)](((]]])([]}}]){)(([]]}[[}[',
    // '([[]])({}(([(){{}[{}]}]){[{}]}))[][{}{}](){}',
    // '[][][][][][([])][]{({()}[[()()]{([(){[]{}}{(())}{[](){}()({}())}[({}[[]()])][]])}])}',
    // '}[{{(}})}}(((())()({]{([]((][(({)[({[]]}[])}]{][{{}]{)][}(])}}}))}}}',
    // '[]({})()[]{}{}[]({}{})[]{([])()[()][{()({})[{}{[[()]{}[]][]}(({{[]{()()()}{}[]()}[]}){{}{}})]}]}',
    // '{{(([{)]{}({][{](){({([[[][)}[)})(',
    // '[{}]{[()({[{}]})]}',
    // '[[{}]]',
    // ']{{({[{]}[[)]]}{}))}{){({]]}{]([)({{[]){)]{}){){}()})(]]{{])(])[]}][[()()}',
    // '{[([}[[{{(]]][}()())]{){(){)]]){})}]{][][(}[]())[}[)})})[][{[)[})()][]))}[[}',
    // ']()])}[}}}{]]{)[}(}]]])])}{(}{([{]({)]}])(})[{}[)]])]}[]{{)){}{()}]}((}}{({])[}])[]}',
    // '(]}[{}{{][}))){{{([)([[])([]{[',
    // '{(()[]){}}(){[]}({{}(()())})([]){}{}(())()[()]{}()',
    // '{{}[{}[{}[]]]}{}({{[]}})[[(){}][]]{}(([]{[][]()()}{{{()()}{[]}({}[]{()})}{()}[[]][()]}))',
    // '{[][]}[{}[](){}]{{}{[][{}]}}',
    // '()(){}(){((){}[])([[]]())}',
    // '{}[[{[((}[(}[[]{{]([(}]][[',
    // '{}[([{[{{}()}]{}}([[{}[]]({}{{()}[][][]})])])]',
    // '{[](}([)(])[]]})()]){[({]}{{{)({}(][{{[}}(]{',
    // '[][]{{}[](())}{}({[()]}())[][[][({}([{}]))]]',
    // '((()))[]{[(()({[()({[]}{})]}))]}{[]}{{({}{})[{}{}]{()([()])[{()}()[[]{}()]{}{}[]()]}[[]{[]}([])]}}',
  ]

  const outputs = [
    'YES',
    'YES',
    'NO',
    'NO',
    'NO',
    'NO',
    'YES',
    'YES',
    'YES',
    'NO',
    'YES',
    'YES',
    'YES',
    'YES',
    'NO',
    'NO',
    'YES',
    'YES',
    'YES',
    'NO',
    'NO',
    'NO',
    'YES',
    'YES',
    'YES',
    'YES',
    'NO',
    'YES',
    'NO',
    'NO',
    'NO',
    'NO',
    'YES',
    'NO',
    'NO',
    'NO',
    'YES',
    'NO',
    'YES',
    'NO',
    'NO',
    'YES',
    'NO',
    'NO',
    'NO',
    'YES',
    'YES',
    'NO',
    'YES',
    'YES',
    'YES',
    'NO',
    'YES',
    'NO',
    'YES',
    'NO',
    'NO',
    'YES',
    'NO',
    'YES',
    'YES',
    'NO',
    'YES',
    'NO',
    'YES',
    'YES',
    'NO',
    'NO',
    'NO',
    'NO',
    'YES',
    'YES',
    'YES',
    'YES',
    'NO',
    'YES',
    'NO',
    'YES',
    'YES',
  ]

  // input.map((i, index) => console.log(isBalanced(i) === outputs[index], i))
  input.map(i => console.log(isBalanced(i)))
}

Main();