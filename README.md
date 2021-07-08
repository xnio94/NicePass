<img src="https://github.com/xnio94/NicePass-chrome/blob/main/images/logo.png?raw=true">
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>NicePass is the lightest and the most secure password manager.</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>Why using NicePass :</strong></p>
<ul style="list-style-type: disc;">
    <li>using the same password on multiple websites is risky and once the password is leaked from one of those websites, all your accounts will be at risk.</li>
    <li>by using a traditional password manager, you delegate managing your passwords to a third party. This solution works well but if the third party got compromised your passwords will be compromised too.</li>
</ul>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>NicePass solves all of these problems, while also being the lightest password manager, open-source, and totally free to use. Here is how it works:</strong></p>
<ul style="list-style-type: disc;">
    <li>you remember only one main password and then generate a new secure password for each website you visit.</li>
    <li>NicePass does not store your passwords on a server and not even on your local machine.</li>
    <li>Instead, each time you want to connect to one of your accounts a password will be computed.</li>
    <li>we use a deterministic one-way algorithm to generate the password using your main password and the domain name of the accounts you want to access.&nbsp;</li>
    <li>this way you always get the same password for the website.</li>
    <li>but no one else can generate it if he doesn&apos;t have your main password</li>
    <li>and even if multiple accounts got compromised and a malicious actor got your passwords for these accounts there is no way he can reverse the algorithm and know your main password, so your other accounts will be secure.</li>
    <li>NicePass will generate at least a 90bit password that will require more than 10000 years to be brute-forced using the fastest supercomputer in the world.</li>
</ul>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'><strong>Create a NicePass implementation for another platform:&nbsp;</strong></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>NicePass generate passwords from two inputs</p>
<ul style="list-style-type: disc;">
    <li>website domain name referred to as <em><span style='font-family:"Times New Roman";'>h</span></em>. (for example github.com)</li>
    <li>main password referred to as <em><span style='font-family:"Times New Roman";'>m</span></em>.</li>
</ul>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>and output a 25-character password &nbsp;using the following formula:</p>
<p><img src="https://raw.githubusercontent.com/xnio94/NicePass-chrome/main/images/hashv1.png"></p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>Where:</p>
<ul style="list-style-type: disc;">
    <li><em>+</em> : is string concatenation.</li>
    <li><em><span style='font-family:"Times New Roman";'>SHA256</span></em><span>&nbsp;: is <a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf">SHA-256</a> applied 1000 times.&nbsp;</span>Applying it 1000 times help against brut forcing short passwords. This computation still takes less than a second on regular laptops.</li>
    <li><em><span style='font-family:"Times New Roman";'>base64Encode</span></em><span style='font-family:"Times New Roman";'>&nbsp;: is Base64 Data Encodings according to <a href="https://datatracker.ietf.org/doc/html/rfc4648">rfc4648</a></span></li>
    <li><span style='font-family:"Times New Roman";'>[:15] : mean truncated to first 15 characters&nbsp;</span></li>
    <li><em>C</em> : is a constant string added to make sure generated passwords are accepted on all website and contain at least one lowercase character one uppercase one digit and one symbol, it &nbsp;is equal to the string &ldquo;+@aA0&rdquo;</li>
</ul>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>&nbsp;</p>
<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;line-height:107%;font-size:15px;font-family:"Calibri",sans-serif;'>NicePass is open source under MIT license and anyone is invited to contribute and add more functionalities.</p>
