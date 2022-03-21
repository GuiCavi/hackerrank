// function contacts(queries: string[][]): number[] {
//   const contacts = [];
//   const result = [];

//   queries = queries.sort((a: string[], b: string[]) => a[0].localeCompare(b[0]));

//   for (let [cmd, param] of queries) {
//     if (cmd === 'add') {
//       contacts.push(param);
//       continue;
//     }

//     if (cmd === 'find') {
//       const contactsFound = contacts.filter(contact => contact.startsWith(param));
//       result.push(contactsFound.length);
//       continue;
//     }
//   }

//   return result;
// }

// function contacts(queries: string[][]): number[] {
//   const contacts: string[] = [];

//   const filterCmds = (cmdName: string) => queries.filter(([cmd]) => cmd.startsWith(cmdName));

//   const addQueries = filterCmds('add');
//   const findQueries = filterCmds('find');

//   addQueries.forEach(query => contacts.push(query[1]));
//   const result = findQueries.map(query => contacts.filter(contact => contact.startsWith(query[1])).length);

//   return result;
// }

function stringOverlap(str1: string, str2: string): string {
  let overlapWord = '';

  for (let i = 0; i < str1.length; i++) {
    if (str1.charAt(i) === str2.charAt(i)) {
      overlapWord += str1.charAt(i);
    } else {
      break;
    }
  }

  return overlapWord;
}

function contacts(queries: string[][]): number[] {
  const contacts = new Map<string, number>();
  const result: number[] = [];

  for (let query of queries) {
    if (query[0] === 'add') {
      for (let i = 1; i <= query[1].length; i++) {
        const ss = query[1].substr(0, i);

        const prev = contacts.get(ss);

        contacts.set(ss, (prev || 0) + 1)
      }

      continue;
    }

    if (query[0] === 'find') {
      const r = contacts.get(query[1]);
      result.push(r || 0);
    }
  }

  return result;
}


const main = () => {
  const input = [
    ['add', 'sbxkdismbyekxayhvlkhi'],
    ['find', 'uixqdubbtzfrvuaeqd'],
    ['add', 'slhkahisonsiftxxyvmhb'],
    ['find', 'jvxoq'],
    ['add', 'suycjwiqgygtfjbrvjood'],
    ['find', 'bkojlj'],
    ['add', 'shqmsfszxygrqdibnothm'],
    ['find', 'nk'],
    ['add', 'sefcnxwkezwyoavtxzyam'],
    ['find', 'zujzwa'],
    ['add', 'stildqkmropobjggxissm'],
    ['find', 'fkwbepazyecutglpok'],
    ['add', 'stqkyutcpdolqjtpgubdj'],
    ['find', 'vyascdncgljhvlkmbv'],
    ['add', 'sxmgmkovdfeeeyuczzhvt'],
    ['find', 'jpxqsa'],
    ['add', 'sgesotvmjijtmwbqoyqho'],
    ['find', 'gdbz'],
    ['add', 'siepdovvgpwealjcczzyc'],
    ['find', 'ulvfoouclnhdqbhpduzs'],
    ['add', 'ssjmfoivlayqadxwikltx'],
    ['find', 'klhlcacugcaktaazlhoe'],
    ['add', 'sddpqasmqdsvabpkjiyut'],
    ['find', 'pxnvexnzbqkqkoeumi'],
    ['add', 'scbgidrcanpzmwcyjivjq'],
    ['find', 'wozxsrwdfky'],
    ['add', 'sfahwfwfavebysyyexaki'],
    ['find', 'sdpvchhb'],
    ['add', 'sisicmzwmhxeagrmuvido'],
    ['find', 'hpjcaiowczmktksttv'],
    ['add', 'svjaiygqppiqfvwicwryj'],
    ['find', 'joeno'],
    ['add', 'syzipqeuoshayurkctpms'],
    ['find', 'axprdjnydcsqrpdhik'],
    ['add', 'ssgewcwtrgoqyntqlmons'],
    ['find', 'z'],
    ['add', 'sgximbqabkbilfbjymlqq'],
    ['find', 'ukstwwk'],
    ['add', 'seconnacszuuneeciqvhc'],
    ['find', 'xhaudkyryrsrly'],
    ['add', 'slwnzjuukqdhrwtvdysmy'],
    ['find', 'rngbbwbiomhxlf'],
    ['add', 'sndmxrykgiksqxcjuvcen'],
    ['find', 'zxyxvjcjmyzzvi'],
    ['add', 'speapskrjyqfbrvrmjknx'],
    ['find', 'e'],
    ['add', 'sltpakiyrkkovkilwqbvm'],
    ['find', 'x'],
    ['add', 'srqkznrdigxlzqbsactbo'],
    ['find', 'hpovkvrz'],
    ['add', 'sbyywcwvabqvkudbnkbgz'],
    ['find', 'qikjgjfcbs'],
    ['add', 'snghzzsufwnagourbgger'],
    ['find', 'sclpvxefjme'],
    ['add', 'sdrumrlpfgntmtrmgmzgp'],
    ['find', 'nywjzd'],
    ['add', 'stsahrsgttjruiqoibhaq'],
    ['find', 'ejhfjgahrvqboebby'],
    ['add', 'stuwrszxgkxqfihbfeefq'],
    ['find', 'ydmqf'],
    ['add', 'sqaalpgtikdukkgdrotvf'],
    ['find', 'xabjtpmpnotc'],
    ['add', 'svwdwaafxdxmzqsbkygjk'],
    ['find', 'ntcyfuyrmuofouanvtx'],
    ['add', 'smhpabcpbcymorlddrvoo'],
    ['find', 'zvfruij'],
    ['add', 'stbtmjinelzeurbayrdmk'],
    ['find', 'pdr'],
    ['add', 'sborgfmawepcewfbjruuh'],
    ['find', 'zbtuxe'],
    ['add', 'slvjlkkybggydvfirohss'],
    ['find', 'fpipskmar'],
    ['add', 'shwurivroreodayfynhgk'],
    ['find', 'ndgim'],
    ['add', 'srevvumaltdxkndfmhmap'],
    ['find', 'vyvygknxseb'],
    ['add', 'shgvhzzfyxjtxbfilxqjh'],
    ['find', 'sewmivzowngbicrnjra'],
    ['add', 'shajygsqdrsdsqcebfkpe'],
    ['find', 'y'],
    ['add', 'sycullgmvfyrjjwpfsstd'],
    ['find', 'nwzqofsqpygev'],
    ['add', 'snpegsfaoasergaxjtupd'],
    ['find', 'hthdoqdojsuqabvrny'],
    ['add', 'swsghzapdfdxlbqmdmyka'],
    ['find', 'laojpbiirxilb'],
    ['add', 'szfvccfcmfnrebijfmxny'],
    ['find', 'mytslei'],
    ['add', 'szlfyjgjmfajkocgxlmpi'],
    ['find', 'uqjxbxgq'],
    ['add', 'simborxdmgnmvdszuphco'],
    ['find', 'tmnbghxmdgmkxf'],
    ['add', 'skglyjxwbolkbluihpmzp'],
    ['find', 'gdtuxkbimgdtjkwlvxr'],
    ['add', 'shgrvmyvhntargxohtetc'],
    ['find', 'xfdcqrwztpcr'],
    ['add', 'sqokevucyjqqjoukbbyxd'],
    ['find', 'swlfjkclpgnf'],
    ['add', 'svvddsylcgfhlfrvlekvz'],
    ['find', 'fbjmgrlctwlcuyrykqo'],
    ['add', 'smbxnkgbmujsghvpgbsvc'],
    ['find', 'wytzlnejuekkzu'],
    ['add', 'suexkcpexfnyvrukrpkuy'],
    ['find', 'zgajlqbaytctkjo'],
    ['add', 'siflvfcjevrtfpagpujwt'],
    ['find', 'qrdckw'],
    ['add', 'sgerzhpktjautuzgrxuvg'],
    ['find', 'yqwvgd'],
    ['add', 'spsyieeihnakmzvbpfjue'],
    ['find', 'v'],
    ['add', 'smiiolomusamqeyctpwhy'],
    ['find', 'sahnhyoflp'],
    ['add', 'stkuzmeysrrypxexawhar'],
    ['find', 'xbyjtxqrnggmhusrnhee'],
    ['add', 'spwdoveexhoovirmepukg'],
    ['find', 'wpzpeyz'],
    ['add', 'spvdabjplnthwdovvznzx'],
    ['find', 'ctwjxysludiydfcs'],
    ['add', 'sjoakyyfwopscbpddtwsu'],
    ['find', 'jbgjdfaje'],
    ['add', 'srfkiprddleyzcpsdpdtp'],
    ['find', 'gbkq'],
    ['add', 'sibkdhwvdzhfujahllzxb'],
    ['find', 'jywnuix'],
    ['add', 'sqnzwhikqfkruqhxjisst'],
    ['find', 'hlbhirfe'],
    ['add', 'sjrurqrogsblkameqhuws'],
    ['find', 'nfpg'],
    ['add', 'sbhyxrrrvgteoaidkmdbf'],
    ['find', 'nrtmvcnptakpfiost'],
    ['add', 'segedwagilzxrhdrnnifl'],
    ['find', 'ifguxdilt'],
    ['add', 'sjcixvvnogtdiyozqkbmp'],
    ['find', 'ypkiuudmhdyiknd'],
    ['add', 'sfymctkyfidmpqyvvdsrh'],
    ['find', 'gtdmknqskvtuu'],
    ['add', 'stvymlhfdhtdbfsulgxtx'],
    ['find', 'ugljxvcrngolipev'],
    ['add', 'srfjudiykpiqzytfzvkfv'],
    ['find', 'vwzra'],
    ['add', 'scngrlvdhrbegakjbzcvj'],
    ['find', 'ohcupzgmngfxdht'],
    ['add', 'swfwrnusmtctznwfmgetl'],
    ['find', 'ocgfqhgbhfqrcti'],
    ['add', 'szbvjdsecruyvnsmfupxj'],
    ['find', 'rvtkpfdjaq'],
    ['add', 'scgvexwqalladrfbbxupy'],
    ['find', 'gdyk'],
    ['add', 'snfadcknszcadfkneaqla'],
    ['find', 'hpctixc'],
    ['add', 'sayoarzbqnshmjftavdkw'],
    ['find', 'hyarhmkqsvp'],
    ['add', 'shubnqifvvsrhtvzshnib'],
    ['find', 'df'],
    ['add', 'sxlvvkqhgapuduwsdfdzn'],
    ['find', 'zketq'],
    ['add', 'sjhvwcwjoxylcukqmewug'],
    ['find', 'mbemhmwzinmwgvrukbic'],
    ['add', 'savfkrhofqmctgjuwezjm'],
    ['find', 'sollnvgwhcle'],
    ['add', 'sbuqyggjafdviantozkhb'],
    ['find', 'jdh'],
    ['add', 'smstyrruqpmjipxouxkuy'],
    ['find', 'nzpdvvfnyoygbnt'],
    ['add', 'swztsgwizsnbhppvsmobu'],
    ['find', 'nwfsidjjajpihnvczav'],
    ['add', 'sibctjeipgvmgbssoenkn'],
    ['find', 'ynopmewfbjikzsuilfs'],
    ['add', 'sppnhshahxldjhmgejtej'],
    ['find', 'zjbxatpsmblmplhge'],
    ['add', 'sieoghygxbwxnsevqyocl'],
    ['find', 'tevsnddyuqolo'],
    ['add', 'srkggqjzdeurpukgvuqar'],
    ['find', 'ougesepigejnaqk'],
    ['add', 'smmqzibmkfzcrrhjzltxm'],
    ['find', 'fybtuvxhmpeeqrhk'],
    ['add', 'srfeieczddhtejbzwznej'],
    ['find', 'ivwsfflcfwta'],
    ['add', 'sqyjcfkelolyivdtofhss'],
    ['find', 'xasugaecdrexort'],
    ['add', 'squdzxnsymnavrxmbzuzo'],
    ['find', 'hyuijlladzaq'],
    ['add', 'stitiyfpfpnkbegujhexq'],
    ['find', 'gqstavupjtkdzb'],
    ['add', 'sorasuiqwgxunlezhljlw'],
    ['find', 'nbkyricxwssckljyriyj'],
    ['add', 'sxapfjupefjzedpkofcmk'],
    ['find', 'piwvrbbielodrrha'],
    ['add', 'swsfyfwcvsupdbddivguj'],
    ['find', 'gjkoxysjrhrmg'],
    ['add', 'sthxqkxtnprnzlrwyjeko'],
    ['find', 'hcmljgxuvzwhytlj'],
    ['add', 'scvkirtoviumjmhjhqzrs'],
    ['find', 'kklpcvdbfbbdwb'],
    ['add', 'sqdjfwbeprblsmssnkqdp'],
    ['find', 'mfebywfhsi'],
    ['add', 'sypduavntjgnsarnhmtpc'],
    ['find', 'ffrrrwdg'],
    ['add', 'ssriharejsqqdfiysfqcg'],
    ['find', 'oiqwuyuwtzy'],
    ['add', 'sdugbpxhyxarysckdqyxf'],
    ['find', 'dxtx'],
    ['add', 'shvlfpjqdvvdehwukrjtm'],
    ['find', 'sbednwhtarlvyavgcjny'],
    ['add', 'svwkxjakbxutdxeutoshl'],
    ['find', 'yremscylflfdwpn'],
    ['add', 'srsrmgqdfatuahmdayloq'],
    ['find', 'dwhfnljio'],
    ['add', 'smvkbavibhjqvycnliiac'],
    ['find', 'yaqylnfzxuhjkur'],
    ['add', 'smjerpxniqeromcmztata'],
    ['find', 'krgznbxofkjg'],
    ['add', 'shsokimjbfyuytebcyzdr'],
    ['find', 'tdopycyuup'],
    ['add', 'suosxevrcptulltcnuomb'],
    ['find', 'heectdcg'],
    ['add', 'srbrbbamlqktxfioxlpcr'],
    ['find', 'rmgoimyusoqhd'],
    ['add', 'stzjrxindknnykzriyimv'],
    ['find', 'vbv'],
    ['add', 'skokbewwnydxcehbnpxcj'],
    ['find', 'eqzdwifwqz'],
    ['add', 'suktfdzpoxjhaikfecwlg'],
    ['find', 'irpme'],
    ['add', 'sjaglisrnyeaajqdurwjw'],
    ['find', 'elnniqybtnan'],
    ['add', 'scypislkwugywrehgyskh'],
    ['find', 'vcie'],
    ['add', 'sieuesagowfumcxwduzsm'],
    ['find', 'gvuhjwqxcojjpjfq'],
    ['add', 'sycmxzwkrltjtorczinyp'],
    ['find', 'xptevaim'],
    ['add', 'scusazjlvmgwvakyjlrav'],
    ['find', 'osrvx'],
    ['add', 'szstkdnhcwbxnqthbsicc'],
    ['find', 'ao'],
    ['add', 'sqndkistyjcreqentgkap'],
    ['find', 'smocqcq'],
    ['add', 'sdqgrvttddaqrmmunjfjj'],
    ['find', 'cigpvenjcfbpej'],
    ['add', 'sjqlgdyjndnipnolpwoln'],
    ['find', 'n'],
    ['add', 'sldqwmguekmqzjxufksrj'],
    ['find', 'jeoxjdmjqwaoioetlyi'],
    ['add', 'snfagegxemsqrhusofsvs'],
    ['find', 'mfwcdaj'],
    ['add', 'subesfdlmmnirovosfqzj'],
    ['find', 'tozpucfdmn'],
    ['add', 'sogjmchjooppxpjlixrli'],
    ['find', 'wxbhgxplccrsqstzfxf'],
    ['add', 'skzxumwimpvjymgtsclmb'],
    ['find', 'jo'],
    ['add', 'sfdjwvbyartrsktawobtj'],
    ['find', 'seodqrmuqzn'],
    ['add', 'sndkwebfwyhieslwkwong'],
    ['find', 'vpzyugk'],
    ['add', 'stjqkiqcguckitodenpwn'],
    ['find', 'vku'],
    ['add', 'sugxvyrvpdcaxspyymjug'],
    ['find', 'hwpgulgn'],
    ['add', 'swytcegyyxybtrkuutygb'],
    ['find', 'pgep'],
    ['add', 'sdhlkcnnrnaookqbqrbrv'],
    ['find', 'htzkcyuvhfjzamsgc'],
    ['add', 'sqquilzdprfwnfvbahiet'],
    ['find', 'dtxzwnuvgquedmmekoe'],
    ['add', 'sibkobzrnuayxzhoraqug'],
    ['find', 'ozsqgbjq'],


    // ["add", "hacking"],
    // ["find", "hac"],
    // ["add", "hackerrank"],
    // ["add", "hacker"],
    // ["add", "abacate"],
    // ["add", "abobora"],
    // ["find", "hak"],
    // ["find", "aba"],
  ];

  console.log(contacts(input).every(i => i === 0));
}

main();