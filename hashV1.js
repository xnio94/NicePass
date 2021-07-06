/* in dart :
 String masterPassword = "anas";
 var msgUint8 = utf8.encode(masterPassword); //js: msgUint8 = new
 TextEncoder().encode(masterPassword); var bytes = sha256.convert(msgUint8).bytes;//js:  bytes
 = Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256', msgUint8))); var passwordHash
 = bytes.sublist(0,5).map((element) => element.toRadixString(36)).toList().join(); //js:
 passwordHash = hashArray.slice(0, 5).map(b => b.toString(36)).join(''); print('pass =
 '+passwordHash); */

async function hashV1(signature) {
  //algorithm V1
  const msgUint8 = new TextEncoder().encode(signature);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.slice(0, 10).map(b => b.toString(36)).join('') + '+@aA0';
}

//*************
// x="mypin";
// for(i=0;i<10000;i++){
//
//   let msgUint8 = new TextEncoder().encode(x);
//   let hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
//   let hashArray = Array.from(new Uint8Array(hashBuffer));
//   let passwordHash = hashArray.slice(0, 5).map(b => b.toString(36)).join('');
//
//   x= passwordHash;
//
// }
// console.log(x);


