/* in dart :
 import 'dart:convert';
 import 'package:crypto/crypto.dart';

 var text = "anas maghraoui";
 var bytes = utf8.encode(text);
 for (int i = 0; i < 1000; i++) bytes = sha256.convert(bytes).bytes;
 var pass = base64Encode(bytes.sublist(0, 30)) + '+@aA0';
 print(pass);
*/

async function hashV1(signature) {
  //algorithm V1
  let hashBuffer = new TextEncoder().encode(signature);
  for (i = 0; i < 1000; i++)
    hashBuffer = await crypto.subtle.digest('SHA-256', hashBuffer);
  let hashArray = Array.from(new Uint8Array(hashBuffer));
  return base64Encode(hashArray.slice(0, 30)) + '+@aA0';
}

//************* todo: make short passwords bruteforce proof apply SHA256 N=10000 time
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


function base64Encode(bytes) {
  i = 0;
  while (i < bytes.length) {
    if (bytes[i] > 255) {
      throw new Error("Can't base64 encode non-ASCII characters.");
    }
    i++;
  }
  var digits = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    i = 0,
    cur, prev, byteNum,
    result = [];
  while (i < bytes.length) {
    cur = bytes[i];
    byteNum = i % 3;
    switch (byteNum) {
      case 0: //first byte
        result.push(digits.charAt(cur >> 2));
        break;
      case 1: //second byte
        result.push(digits.charAt((prev & 3) << 4 | (cur >> 4)));
        break;
      case 2: //third byte
        result.push(digits.charAt((prev & 0x0f) << 2 | (cur >> 6)));
        result.push(digits.charAt(cur & 0x3f));
        break;
    }
    prev = cur;
    i++;
  }
  if (byteNum == 0) {
    result.push(digits.charAt((prev & 3) << 4));
    result.push("==");
  } else if (byteNum == 1) {
    result.push(digits.charAt((prev & 0x0f) << 2));
    result.push("=");
  }
  return result.join("");
}

