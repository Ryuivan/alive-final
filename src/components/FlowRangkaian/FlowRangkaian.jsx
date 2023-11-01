import "./stylesFlowRangkaian.css";
import { FaLocationDot } from "react-icons/fa6";

export default function FlowRangkaian() {
  return (
    <div className="backgroundFlow">
      {/* <div className="noisyFlow"> */}
        <div class="timelineFlow">
          <div class="containerFlow rightFlow">
            <div class="contentFlow">
              <div className="JudulRangkaianFlow">
                <p style={{fontFamily: "Montserrat"}}>HEALTH CHECK UP</p>
              </div>
              <div className="contentTglRangkaianFlow">
                <div className="TanggalRangkaianFlow">
                  <p>6 November 2023 <br /> <FaLocationDot /> Booth Open Recruitment 1-6</p>
                </div>
              </div>
            </div>
          </div>

          <div class="containerFlow rightFlow">
            <div class="contentFlow">
              <div className="JudulRangkaianFlow">
                <p style={{fontFamily: "Montserrat"}}>WORK OUT WORKSHOP</p>
              </div>
              <div className="contentTglRangkaianFlow">
                <div className="TanggalRangkaianFlow">
                  <p>10 November 2023 <br /> <FaLocationDot /> Student Lounge 2, D15</p>
                </div>
              </div>
            </div>
          </div>

          <div className="BottomSectionFlow">
            <div class="containerFlow rightFlow ">
              <div class="contentFlow">
                <div className="JudulRangkaianFlow">
                  <p style={{fontFamily: "Montserrat"}}>TALKSHOW</p>
                </div>
                <div className="contentTglRangkaianFlow">
                  <div className="TanggalRangkaianFlow">
                    <p>15 November 2023 <br /> <FaLocationDot /> Lecture Theater, D1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}
