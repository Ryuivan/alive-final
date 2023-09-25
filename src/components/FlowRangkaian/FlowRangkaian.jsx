import "./stylesFlowRangkaian.css";

export default function FlowRangkaian() {
  return (
    <div className="backgroundFlow">
      <div className="noisyFlow">
        <div class="timelineFlow">
          <div class="containerFlow rightFlow">
            <div class="contentFlow">
              <div className="JudulRangkaianFlow">
                <p>HEALTH CHECK UP</p>
              </div>
              <div className="contentTglRangkaianFlow">
                <div className="TanggalRangkaianaFlow">
                  <p>31 Oktober 2023</p>
                </div>
              </div>
            </div>
          </div>

          <div class="containerFlow rightFlow">
            <div class="contentFlow">
              <div className="JudulRangkaianFlow">
                <p>WORK OUT WORKSHOP</p>
              </div>
              <div className="contentTglRangkaianFlow">
                <div className="TanggalRangkaianFlow">
                  <p>2 November 2023</p>
                </div>
              </div>
            </div>
          </div>

          <div className="BottomSectionFlow">
            <div class="containerFlow rightFlow ">
              <div class="contentFlow">
                <div className="JudulRangkaianFlow">
                  <p>TALKSHOW</p>
                </div>
                <div className="contentTglRangkaianFlow">
                  <div className="TanggalRangkaianFlow">
                    <p>8 November 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
