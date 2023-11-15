// import "./Footer.css";
// import { FaInstagram, FaLine } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <div id="contact">
//       <footer className="bg-footer relative-footer flex-footer">
//         <div className="flex-footer container-footer relative-footer">
//           <img
//             className="star-mobile-footer star-mobile2-footer absolute-footer"
//             src="https://cdn.discordapp.com/attachments/1135510437790765076/1155558912758653009/starMobile.webp"
//             alt="star-mobile"
//           />
//           <img
//             className="logo-footer"
//             src="https://cdn.discordapp.com/attachments/1135510437790765076/1155558914121801798/logoAlive.webp"
//             alt="logo-footer"
//           />
//           <div className="relative-footer flex-footer content-footer">
//             <span className="register-now-footer relative-footer">
//               <img
//                 className="logo-mobile-footer"
//                 src="https://cdn.discordapp.com/attachments/1135510437790765076/1155558914121801798/logoAlive.webp"
//                 alt="logo-mobile-footer"
//               />
//               <img
//                 className="absolute-footer star-footer"
//                 src="https://cdn.discordapp.com/attachments/1135510437790765076/1155558914553811075/star.webp"
//                 alt="star-footer"
//               />
//               <div className="register-now-footer d-flex flex-column">
//                 <span>REGISTER</span>
//                 <span>NOW!</span>
//               </div>
//             </span>
//             <div className="footer-line"></div>
//             <div className="contact-footer">
//               <div>Contact Us</div>
//               <a
//                 href="https://www.instagram.com/alivemedic.umn/"
//                 target="_blank"
//                 className="instagram d-flex align-items-center"
//               >
//                 <FaInstagram />
//                 &nbsp;alivemedic.umn
//               </a>
//               <a
//                 href="http://line.me/ti/p/~christineangela03"
//                 target="_blank"
//                 className="instagram d-flex align-items-center"
//               >
//                 <FaLine />
//                 &nbsp;christineangela03
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="sponsor-section"></div>
//         <img
//           className="wave-footer absolute-footer"
//           src="https://cdn.discordapp.com/attachments/1135510437790765076/1155558913211633694/wave.webp"
//           alt="wave-footer"
//         />
//         <img
//           className="wave-mobile-footer absolute-footer"
//           src="https://cdn.discordapp.com/attachments/1135510437790765076/1155558913756905533/waveMobile.webp"
//           alt="wave-mobile-footer"
//         />
//       </footer>
//     </div>
//   );
// }

import "./Footer.css";
import { FaInstagram, FaLine } from "react-icons/fa";

export default function Footer() {
  return (
    <div id="contact">
      <footer className="bg-footer relative-footer flex-footer">
        <div className="flex-footer container-footer relative-footer">
          <img
            className="star-mobile-footer star-mobile2-footer absolute-footer"
            src="https://cdn.discordapp.com/attachments/1135510437790765076/1155558912758653009/starMobile.webp"
            alt="star-mobile"
          />
          <img
            className="logo-footer"
            src="https://cdn.discordapp.com/attachments/1135510437790765076/1155558914121801798/logoAlive.webp"
            alt="logo-footer"
          />
          <div className="relative-footer flex-footer content-footer">
            <span className="register-now-footer relative-footer">
              <img
                className="logo-mobile-footer"
                src="https://cdn.discordapp.com/attachments/1135510437790765076/1155558914121801798/logoAlive.webp"
                alt="logo-mobile-footer"
              />
              <img
                className="absolute-footer star-footer"
                src="https://cdn.discordapp.com/attachments/1135510437790765076/1155558914553811075/star.webp"
                alt="star-footer"
              />
              <div className="register-now-footer d-flex flex-column">
                <span>REGISTER</span>
                <span>NOW!</span>
              </div>
            </span>
            <div className="footer-line"></div>
            <div className="contact-footer">
              <div>Contact Us</div>
              <a
                href="https://www.instagram.com/alivemedic.umn/"
                target="_blank"
                className="instagram d-flex align-items-center"
              >
                <FaInstagram />
                &nbsp;alivemedic.umn
              </a>
              <a
                href="http://line.me/ti/p/~christineangela03"
                target="_blank"
                className="instagram d-flex align-items-center"
              >
                <FaLine />
                &nbsp;christineangela03
              </a>
            </div>
          </div>
        </div>
        <div
          className="sponsor-section-medpar-section"
          style={{ marginTop: "100px" }}
        >
          <div className="sponsor-section">
            <div>
              <h1>Sponsor</h1>
            </div>
            <img
              style={{ height: "auto", width: "28%", margin: "0 15px" }}
              src="https://cdn.discordapp.com/attachments/1135510437790765076/1173615802616909854/Logo_AF_page-0001-removebg-preview.png?ex=656499e4&is=655224e4&hm=f4cc2a5a0477e3f42f5564a3a6eb169b2f01ac1204061273296d927771653be0&"
            />
            <img
              style={{ height: "auto", width: "28%" }}
              src="https://cdn.discordapp.com/attachments/1135510437790765076/1173598695221116938/logo_closetwear.png?ex=656489f5&is=655214f5&hm=ac17a4489ec03d032152465204cf190f5102ad201ab3a32c1d100655c990a34b&"
              alt="Dennis-Catering"
            />
            <img
              style={{ height: "auto", width: "25%", margin: "0 15px" }}
              src="https://cdn.discordapp.com/attachments/1135510437790765076/1173610201182634095/Logo-Delicyo.png?ex=656494ac&is=65521fac&hm=977011f6fe5194c611c87db953b282d243fe5a84621b8753d0303bfa725eb8f6&"
            />
            <img
              style={{ height: "auto", width: "20%" }}
              src="https://cdn.discordapp.com/attachments/1135510437790765076/1173611003490078760/Dennis_Catering-removebg-preview.png?ex=6564956b&is=6552206b&hm=a2b686f21aadb2a7114a98d770b74b31ef514b35655de9cd6abec4f32a4f6896&"
            />
            <img
              style={{ height: "auto", width: "20%" }}
              src="https://cdn.discordapp.com/attachments/1135510437790765076/1173610200876470322/PLAT_LOGO-Pixelindie_page-0002-removebg-preview.png?ex=656494ac&is=65521fac&hm=fd5e7940101b8346bf8ea9c537e5651a145ff491f6441d4be6cf6626f14a9652&"
            />
          </div>
          <div className="medpar-section">
            <div className="">
              <h1>Media Partner</h1>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <img
                  style={{ width: "25%" }}
                  src="https://cdn.discordapp.com/attachments/1135510437790765076/1173690526923489331/LOGO_CDC_by_Mr_TIO_versi_panjang_NEW_EDIT-01.png?ex=6564df7b&is=65526a7b&hm=df7d3410cd4dd88ecc8e3cc2c4f538b7e7edd2f25af3abf547bcd85e234a8269&"
                />
                <img
                  style={{ width: "15%" }}
                  src="https://cdn.discordapp.com/attachments/1135510437790765076/1173690526260797530/Logo_UMN.png?ex=6564df7b&is=65526a7b&hm=076112c3a55c45374843fde63ceafedc6fa4c70fd5e1cd6d6be0498c9b7aa63e&"
                />
                <img
                  style={{ width: "20%" }}
                  src="https://cdn.discordapp.com/attachments/1135510437790765076/1173690527955296296/LOGO_UMN_TV_PNG.png?ex=6564df7b&is=65526a7b&hm=e2fc3174ad22ff77f4ffe53e93a6fb7df3968b1746326f17425610b280bdc8ca&"
                />
                <img
                  style={{ width: "20%" }}
                  src="https://cdn.discordapp.com/attachments/1135510437790765076/1173890016238375032/informasi_event-removebg-preview.png?ex=65659945&is=65532445&hm=470acf74184b474d5b9c714f35ac66c9e7eb452371a1f33c81c07a913741cbb0&"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <img
                  style={{ width: "19%" }}
                  src="https://cdn.discordapp.com/attachments/1135510437790765076/1173690527221305425/logo_hmdkv.png?ex=6564df7b&is=65526a7b&hm=1d6f5263d624315a32fcdb943d8dc4539f9a30070f5a77621d6de1a5f45757eb&"
                />
                <img
                  style={{ width: "19%" }}
                  src="https://cdn.discordapp.com/attachments/1135510437790765076/1173891378623807548/1699808195417-removebg-preview.png?ex=65659a8a&is=6553258a&hm=e465b0335b9ff4ef641534a5e3e884a249cf2f3c454f23173536515cee748c0c&"
                />
                <img
                  style={{ width: "19%" }}
                  src="https://cdn.discordapp.com/attachments/1135510437790765076/1173891378380550184/Logo_Eventhunter.id-removebg-preview.png?ex=65659a8a&is=6553258a&hm=c60298dc1b0b223a180a6349dbaa8708dd2f9c1e3b06dad3c7fccd36c69817ef&"
                />
                <img
                  style={{ width: "19%" }}
                  src="https://cdn.discordapp.com/attachments/1135510437790765076/1173893424307507261/Profile_Picture_Logo_COMMPRESS-removebg-preview.png?ex=65659c72&is=65532772&hm=0aca9f0132e6f7ac497f676c65ca37ff59ef0ce8be1ebd9dfa702c9471c60647&"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <img
                  style={{ width: "12%" }}
                  src="https://cdn.discordapp.com/attachments/1135510437790765076/1173893424076816384/Logo_Ubiz-removebg-preview.png?ex=65659c72&is=65532772&hm=75c96df6d262c97409cf718f084ec5fa912b36194f2aa914b8be6192e95da773&"
                />
                <img
                  style={{ width: "20%" }}
                  src="https://cdn.discordapp.com/attachments/1135510437790765076/1173690530085994577/HIMSI.png?ex=6564df7c&is=65526a7c&hm=22402708cb9eb1991c3280feb8ea0595037c5c5d14e3121c08ebb09448ac758b&"
                />
                <img
                  style={{ width: "20%" }}
                  src="https://cdn.discordapp.com/attachments/1135510437790765076/1173690527552651284/logo_imkom.png?ex=6564df7b&is=65526a7b&hm=1a5debc54d6228479e51e33a983f82bcc265960667f65ae8e58c0b114a448218&"
                />
                <img
                  style={{ width: "13%" }}
                  src="https://cdn.discordapp.com/attachments/1135510437790765076/1173690529612054608/Qorie_C.png?ex=6564df7c&is=65526a7c&hm=9c51037cb9c49bf79d182b04147bcb90caea5f6a9806d18a788b7fd00140abad&"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <img
                  style={{ width: "15%" }}
                  src="https://cdn.discordapp.com/attachments/1135510437790765076/1173895177732100187/LOGO_ULTIMA_SONORA.png?ex=65659e14&is=65532914&hm=e400e656c6a0ae715b6b4660d520b470955380a7ee67f0ba011fb7e2db1f55c8&"
                />
                <img
                  style={{ width: "20%" }}
                  src="https://cdn.discordapp.com/attachments/1135510437790765076/1173895178872963092/LOGO_UMN_RADIO.PNG?ex=65659e14&is=65532914&hm=07af719be2931e281912e3d8d74092675afef9ac2ea9536231e8d524c9eb8247&"
                />
                <img
                  style={{ width: "20%" }}
                  src="https://cdn.discordapp.com/attachments/1135510437790765076/1173690530425741422/IMG_1627.PNG?ex=6564df7c&is=65526a7c&hm=69640d5d71a6f4765cddb049eca376ce58192a5efbe67c5978a868486f7da6f3&"
                />
                <img
                  style={{ width: "15%" }}
                  src="https://cdn.discordapp.com/attachments/1135510437790765076/1173895178373832704/LOGO_ULOVE_FIX.png?ex=65659e14&is=65532914&hm=6f75053d67518d7acb2fba24ecdb82dba6ad381effed810502a24c8ca0a10429&"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  
                }}
              >
                <img
                  style={{ width: "19%" }}
                  src="https://cdn.discordapp.com/attachments/1135510437790765076/1173896920817729566/obscura-removebg-preview.png?ex=65659fb3&is=65532ab3&hm=6d63e0bc829ec758c2da2efd76e548b69948b3fe89a2c4c609c6f43c0a66a155&"
                />
                <img
                  style={{ width: "19%" }}
                  src="https://cdn.discordapp.com/attachments/1135510437790765076/1173896919869816862/logo_Jcafe.png?ex=65659fb3&is=65532ab3&hm=b91e8e4c29e4bc05e453b2aea05111f47cf66bed3f937d625a28741e05c66330&"
                />
                <img
                  style={{ width: "19%" }}
                  src="https://cdn.discordapp.com/attachments/1135510437790765076/1173896920176005120/logo_umn_juice-removebg-preview.png?ex=65659fb3&is=65532ab3&hm=5215e9799ce80d1cc6e8bdd0b7161d1dfdf5e1c23097540fc892fab997fd2990&"
                />
                <img
                  style={{ width: "19%" }}
                  src="https://cdn.discordapp.com/attachments/1135510437790765076/1173896920419291176/MedicGreen.png?ex=65659fb3&is=65532ab3&hm=0e4fe37e7eeb87ad66c22f4304f645f875e07b2db4a09e84c5529d7df6915e87&"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <img
                  style={{ width: "19%" }}
                  src="https://cdn.discordapp.com/attachments/1135510437790765076/1174236126035320893/AMSA_UPH_LOGO_2017_putih.png?ex=6566db9c&is=6554669c&hm=587cf948bdbd188438f6506ca454e2d79272f363f9219c866b83377ce14c8eb8&"
                />
                <img
                  style={{ width: "19%" }}
                  src="https://cdn.discordapp.com/attachments/1135510437790765076/1174236126303752202/ultimagz.png?ex=6566db9c&is=6554669c&hm=cb6ded52c6a740b516e7fe55aa03c14054baa43926aa499b701f548b8a1a8cb3&"
                />
                <img
                  style={{ width: "19%" }}
                  src="https://cdn.discordapp.com/attachments/1135510437790765076/1174236888001953873/logo_info_event_jpg-removebg-preview.png?ex=6566dc52&is=65546752&hm=449565a8f7f1b779351f5e21cbd2c73fd2a3c71d7a77323d397dff504e83996e&"
                />
                <img
                  style={{ width: "19%" }}
                  src="https://cdn.discordapp.com/attachments/1135510437790765076/1174236888345882664/image-removebg-preview.png?ex=6566dc52&is=65546752&hm=292b9e95deed9d0f68af5c573484b4820fee7b7eb64dd289bbbeef925e6d8104&"
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="wave-footer absolute-footer"
          src="https://cdn.discordapp.com/attachments/1135510437790765076/1155558913211633694/wave.webp"
          alt="wave-footer"
        />
        <img
          className="wave-mobile-footer absolute-footer"
          src="https://cdn.discordapp.com/attachments/1135510437790765076/1155558913756905533/waveMobile.webp"
          alt="wave-mobile-footer"
        />
      </footer>
    </div>
  );
}

