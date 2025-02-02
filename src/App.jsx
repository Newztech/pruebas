import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

import { allLinks, allFunctions } from "./scripts";
import "./index.css";

const App = () => {
  // To handle the responsiveness in Text and Images, we are using vanilla css for now.
  return (
    <div className="parent-div relative overflow-hidden m-auto p-[0px] box-border">
      <div className="absolute w-[100%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden bg-[#080a0bff] absolute">
        {/* Hero Section1 */}
        <section className="absolute w-[100%] h-[19.84%] top-[0%] left-[0%] opacity-[1] z-[5]  rotate-[0deg] absolute">
          <div className="absolute w-[100%] h-[97.04%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg] absolute">
            <div className="absolute w-[100%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden absolute">
              <img
                src="https://s3-alpha-sig.figma.com/img/559b/0637/f2f46524231265a54555a13ff4d19e57?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nXSSO7DOei9I9xJvjrlnYezM~kDM0b0M6iWAYR2XI~FBv5b1JjbRYsGXA-bRAfltb3n1yX8Rnt7DbOL9h4nEyKwpfjnMNxDBmz1x45TcNZtDMJxMW9b-VV49o0p-8NNIY78oKrbdX7A9Er~F1IyEG74390q1sXiZwaiQdvCW8ygRdAogXoX~fxrlYpRqCXGAyux7jwzWsEijkPmKAoi8G~cXM4fjBfJMlEG7zSq2nH88QBEr7y5gCTbZfXvkdy547HX6rvnjcPqRUj4iFJmDnU3MJRkPIC-17~f7LRssEjIG98mB~NhwQ7OH5eT60wxpqfIdv2ENFkH~BbyBDUzcJw__"
                className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat object-cover bg-crop"
                alt="7228-ALT"
              />{" "}
            </div>

            <div className="absolute w-[100%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[1]  rotate-[0deg]    gradient-0 absolute"></div>

            <div className="absolute w-[100%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[2]  rotate-[0deg]   scale-y-[-1]   gradient-1 absolute"></div>
          </div>

          <div className="absolute w-[70.12%] h-[7.64%] top-[3.59%] left-[8.33%] opacity-[1] z-[3]  rotate-[0deg] absolute">
            <div className="absolute w-[12.11%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden absolute">
              <img
                src="https://s3-alpha-sig.figma.com/img/031b/d552/c3dd404d24a166426e98a8676dd75474?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bUQiv~mMKZtKxR4SmbZz3xRearTNK~k6zrL9f5lR7K1Qa28VglEd8-8T-Wu9MLFbcQbuLFzx3u11gWplvDACm9c6Bp30ewjfHK1tjZ6TgqfE--V5vu7ReooGtbeb-0-6vMul8imJMlOg5HoX21Hm3Uj-IgvM5YMyCZ1dVh0DcuDB3IQ3f3uJhcP75E7mLUwBEUaUKu1OWDaaTTkDXVLkTD6zy6Lw40RVESJ-qgV5JC92ME1jA7f~LbMDZAf7zHSLsDrtDWcsZiPPlW36L3osvDu0TngIcKaie1yk9KGppBlAP1g-1wkSuauED-CIng-sfXPd4Y0pGxy~azPzKGzkdA__"
                className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
                alt="7245-ALT"
              />{" "}
            </div>

            <div className="absolute w-[4.63%] h-[29.41%] top-[0%] left-[95.37%] opacity-[1] z-[1]  rotate-[0deg] absolute">
              <div className="absolute w-[100%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg] absolute">
                <div className="absolute w-[70.63%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   text-right leading-[0px] absolute">
                  <span className="language-7248-0">{`eng`}</span>
                </div>

                <div className="absolute w-[13.96%] h-[19.33%] top-[40.8%] left-[87.17%] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border absolute">
                  <div className="nodeBg-7249 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-[6.51%] h-[172.51%] top-[8.13%] left-[46.74%] opacity-[1] z-[4]  rotate-[-90deg]   bg-[#080a0bff] blur-[7.5px] absolute"></div>

          <div className="absolute w-[60.26%] h-[15.18%] top-[42.37%] left-[19.9%] opacity-[1] z-[2]  rotate-[0deg] absolute">
            <div className="absolute w-[100%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg] absolute">
              <div className="absolute w-[100%] h-[69.82%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px] absolute">
                <span className="survive-7236-0">{`SURVIVE AT ALL COSTS`}</span>
              </div>

              <div className="absolute w-[29.39%] h-[21.3%] top-[78.7%] left-[35.31%] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
                <span className="sub-text-7237-0">{`Experience our games`}</span>
              </div>
            </div>
          </div>

          <div className="absolute w-[4.48%] h-[4.13%] top-[82.48%] left-[47.76%] opacity-[1] z-[1]  rotate-[0deg] absolute">
            <div className="absolute w-[100%] h-[47.83%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   text-justify leading-[0px] absolute">
              <span className="the-story-butto-7232-0">{`The story`}</span>
            </div>

            <div className="absolute w-[44.19%] h-[34.78%] top-[67.39%] left-[27.91%] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-7233 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>
          </div>
        </section>
        {/* Frame 41 */}
        <section className="absolute w-[43.91%] h-[0.39%] top-[0.82%] left-[28.33%] opacity-[1] z-[6]  rotate-[0deg] absolute">
          <div className="absolute w-[6.41%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   text-right leading-[0px] absolute">
            <span className="main-7252-0">{`MAIN`}</span>
          </div>

          <div className="absolute w-[8.19%] h-[100%] top-[0%] left-[12.34%] opacity-[1] z-[1]  rotate-[0deg]   text-right leading-[0px] absolute">
            <span className="about-7253-0">{`about`}</span>
          </div>

          <div className="absolute w-[19.57%] h-[100%] top-[0%] left-[26.45%] opacity-[1] z-[2]  rotate-[0deg]   text-left leading-[0px] absolute">
            <span className="features-7254-0">{`game features`}</span>
          </div>

          <div className="absolute w-[28.83%] h-[100%] top-[0%] left-[51.96%] opacity-[1] z-[3]  rotate-[0deg]   text-left leading-[0px] absolute">
            <span className="requirements-7255-0">{`System requirements`}</span>
          </div>

          <div className="absolute w-[13.29%] h-[100%] top-[0%] left-[86.71%] opacity-[1] z-[4]  rotate-[0deg]   text-right leading-[0px] absolute">
            <span className="subscribe-7256-0">{`subscribe`}</span>
          </div>
        </section>
        {/* About Valhalla1 */}
        <section className="absolute w-[100.05%] h-[27.81%] top-[19.16%] left-[-0.05%] opacity-[1] z-[4]  rotate-[0deg] absolute">
          <div className="absolute w-[100%] h-[69.23%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg] absolute">
            <div className="absolute w-[100%] h-[100%] top-[0%] left-[0%] opacity-[0.9] z-[1]  rotate-[0deg]   bg-[#0f0f0fff] absolute"></div>

            <div className="absolute w-[100%] h-[99.91%] top-[0%] left-[0%] opacity-[1] z-[2]  rotate-[0deg]    gradient-2 absolute"></div>

            <div className="absolute w-[99.95%] h-[99.6%] top-[0.19%] left-[0.05%] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden absolute">
              <img
                src="https://s3-alpha-sig.figma.com/img/c016/c6aa/2d11104af1a577b09aef5e5fb33e3c54?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bau~zoGkglEkNMi1ux7ZboLV0202tK-ssE9-6PQ3OPM1gG9pctxxj8pNUkKO9SUcNPABoxpyE9Mh3MZnr0-aM6lz6LKACPvA0kRLGfM89vHKgZCGYfDPYRLC-9BhpO-~Ld7aR2kgwxRoaTaLZbjFSk7kMkJInfwZjzOFAUU~vcv9aWUJxmG65TJyP1yY6pmsGlsjl0XXRLkaeEV22da-lxXQjmcZ90kHULJt~5nXJw6zCBMjI00ZSNUddCCUsyHTjMNJgtcZgDxobDkWIioRBrYf1fdvgFLf~DTqQyKq8ahywrKBw-duliaDS515SPSolZdng22Bun0vFxsFIjrgPQ__"
                className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
                alt="7197-ALT"
              />{" "}
            </div>
          </div>

          <div className="absolute w-[81.42%] h-[42.69%] top-[15.06%] left-[8.38%] opacity-[1] z-[1]  rotate-[0deg] absolute">
            <div className="absolute w-[45.49%] h-[76.28%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg] absolute">
              <div className="absolute w-[100%] h-[14.57%] top-[0%] left-[0%] opacity-[1] z-[1]  rotate-[0deg] absolute">
                <div className="absolute w-[63.67%] h-[48.65%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg] absolute">
                  <div className="absolute w-[100%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px] absolute">
                    <span className="h3-7207-0">{`Who are `}</span>
                    <span className="h3-7207-1">{`Grinding gear games`}</span>
                  </div>
                </div>

                <div className="absolute w-[100%] h-[4.05%] top-[95.95%] left-[0%] opacity-[1] z-[1]  rotate-[0deg]   rounded-[4px] bg-[#ffffffff] absolute"></div>
              </div>

              <div className="absolute w-[67.88%] h-[48.23%] top-[51.77%] left-[21.5%] opacity-[1] z-[0]  rotate-[0deg] absolute">
                <div className="absolute w-[100%] h-[97.96%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   text-justify leading-[0px] absolute">
                  <span className="about-game-text-7203-0">{`When focusing on the main objectives, If you're a gamer that strives to see all aspects of the game, you are likely to spend around 136 Hours to obtain 100% completion.

once you start getting comfortable with the world and the changes needed to play stealthily.
`}</span>
                </div>

                <div className="absolute w-[18.01%] h-[2.45%] top-[97.55%] left-[62.53%] opacity-[1] z-[1]  rotate-[0deg]   bg-[#3db3a2ff] absolute"></div>
              </div>
            </div>

            <div className="absolute w-[46.71%] h-[100%] top-[0%] left-[53.29%] opacity-[1] z-[1]  rotate-[0deg] absolute">
              <div className="absolute w-[100%] h-[91.74%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg] absolute">
                <div className="absolute w-[77.35%] h-[100%] top-[0%] left-[11.33%] opacity-[1] z-[1]  rotate-[0deg] absolute">
                  <div className="absolute w-[89.03%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[2]  rotate-[0deg]   overflow-hidden rounded-[6px] box-border border-l-[2px] border-l-[#3db3a2ff] border-r-[2px] border-r-[#3db3a2ff] border-t-[2px] border-t-[#3db3a2ff] border-b-[2px] border-b-[#3db3a2ff] absolute">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/8f59/7aed/51020fdb3f35644c2bf2646ac2170daf?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PG6Z6sOtNRilnEZqjAn-TEwNCHY0kDfd5nsl9kayWvhowy9PrMZdlG0DWolmZH6iJNeGrcAaqxIDDvLpR-L3iHpO0~BOH8jP3ZfasEiBgk5lKM3yEwlnZli1bTzNz1dUZCPsMDwmpFDPBz8rvayniGHJtETOYojsADMANkMdFpQo67hK63JpEB1T7ZOWRo3B3hAtKGLC3QOVqF8VdW~8-1IkSXDvKQ5QlNuA65mzIaXfLz-vY3NIRYRLLUPbkH63i9IYpIyU1C~M9O9QobLNWfxWSMV-GEd4K3fTa0-w6EdStjsmMEWt9p28B8YNEUyO8b3b~TDCElpHIw5IBZC-Jw__"
                      className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
                      alt="7215-ALT"
                    />{" "}
                  </div>

                  <div className="absolute w-[79.65%] h-[81.83%] top-[9%] left-[15.22%] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden rounded-[6px] box-border border-l-[2px] border-l-[#3db3a2ff] border-r-[2px] border-r-[#3db3a2ff] border-t-[2px] border-t-[#3db3a2ff] border-b-[2px] border-b-[#3db3a2ff] absolute">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/3119/f1d0/2368586133fc8c6c19fef45d8a5c0ffe?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g68BrdjK-ikX-uJj1NystolJMhX-wqSVOakgMO66k-173IkkbhEDJ7X3f1IRIs5-UnatHgLHlWsO1Nn09OspO4KdYPVNvC~HVG0haN19o4PTUhmWskzfysBVNVb1XTeAqSvs6QrXBo1BuEDFvx3wevXCJaiSZEvUR1oFVbvtN2Pz4fMX-zHo-aRY8mGuwoU9h6s6zbu-mnkTbQ~7tNnapZeC~PEEdl6qzZCsBoZY0q83hHF-3pwRnT97Jcs~iM4M81hFfrpsnUXIohdXVcD~QKBM3k8yinO3v2uq009dFR-m1r~m-FGadC6cjjRHfsGvv49aRpW-rkLMh~4zQTdAcA__"
                      className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
                      alt="7214-ALT"
                    />{" "}
                  </div>

                  <div className="absolute w-[65.49%] h-[65.47%] top-[17.18%] left-[34.51%] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden rounded-[6px] box-border border-l-[2px] border-l-[#3db3a2ff] border-r-[2px] border-r-[#3db3a2ff] border-t-[2px] border-t-[#3db3a2ff] border-b-[2px] border-b-[#3db3a2ff] absolute">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/464a/0be7/4d950ce29df742fb7f295696dd538ba8?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ktvVqdTSl2byLLi2g1BZpXRLPDCR4qvj2NT9jgei3CLan~AMseooOBJFM97Mk61ggbBwUHb4Knl4J~gQpIzEqTeFDuqMr4e6Udasj80n5zQi71ty5wdrutvagHFqUi8bq-P8a3et63bj3QpbWLdfVjEtrAtL9D6JcjyFyuTs7Eg1uclRFClttldj8EmS9Q5fgQhjdnfT61QHsarrnLId8gbLrKH2VD6OIeMjWOyCm82q-i97CWWWCDhuMfY029Rc7DXn2KXmmyTlDZXmfYRkEaGcXv9DyXN0xABpsunAizTQR5n9HUoe9r0q5qJnnk~-nUaLaa8o4qYm1R-LyRzUqA__"
                      className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
                      alt="7213-ALT"
                    />{" "}
                  </div>
                </div>

                <div className="absolute w-[2.34%] h-[6.13%] top-[46.94%] left-[-0.23%] opacity-[1] z-[0]  rotate-[-90deg]  rotate-[-90deg]  origin-[-4.36%_197.74%] overflow-hidden box-border absolute">
                  <div className="nodeBg-7211 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>

                <div className="absolute w-[2.34%] h-[6.13%] top-[46.94%] left-[97.89%] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden box-border absolute">
                  <div className="nodeBg-7216 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
              </div>

              <div className="absolute w-[29.56%] h-[2.1%] top-[97.9%] left-[35.22%] opacity-[1] z-[1]  rotate-[0deg] absolute">
                <div className="absolute w-[18.48%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg] absolute">
                  <div className="absolute w-[35.09%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[1]  rotate-[0deg]   rounded-full bg-[#ffffffff] [box-shadow:inset_0_0_0_1px_#ffffffff,inset_0_0_1px_0_#ffffffff,inset_0_1px_0_0_#ffffffff,inset_1px_0_0_0_#ffffffff] border-l-[0px] border-l-[#ffffffff] border-r-[0px] border-r-[#ffffffff] border-t-[0px] border-t-[#ffffffff] border-b-[0px] border-b-[#ffffffff] absolute"></div>

                  <div className="absolute w-[85.52%] h-[14%] top-[42.44%] left-[16.93%] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
                    <div className="nodeBg-7219 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                </div>

                <div className="absolute w-[6.48%] h-[100%] top-[0%] left-[32.38%] opacity-[1] z-[1]  rotate-[0deg]   rounded-full [box-shadow:inset_0_0_0_1px_#ffffffff,inset_0_0_1px_0_#ffffffff,inset_0_1px_0_0_#ffffffff,inset_1px_0_0_0_#ffffffff] border-l-[0px] border-l-[#ffffffff] border-r-[0px] border-r-[#ffffffff] border-t-[0px] border-t-[#ffffffff] border-b-[0px] border-b-[#ffffffff] absolute"></div>

                <div className="absolute w-[6.48%] h-[100%] top-[0%] left-[52.76%] opacity-[1] z-[2]  rotate-[0deg]   rounded-full [box-shadow:inset_0_0_0_1px_#ffffffff,inset_0_0_1px_0_#ffffffff,inset_0_1px_0_0_#ffffffff,inset_1px_0_0_0_#ffffffff] border-l-[0px] border-l-[#ffffffff] border-r-[0px] border-r-[#ffffffff] border-t-[0px] border-t-[#ffffffff] border-b-[0px] border-b-[#ffffffff] absolute"></div>

                <div className="absolute w-[6.48%] h-[100%] top-[0%] left-[73.14%] opacity-[1] z-[3]  rotate-[0deg]   rounded-full [box-shadow:inset_0_0_0_1px_#ffffffff,inset_0_0_1px_0_#ffffffff,inset_0_1px_0_0_#ffffffff,inset_1px_0_0_0_#ffffffff] border-l-[0px] border-l-[#ffffffff] border-r-[0px] border-r-[#ffffffff] border-t-[0px] border-t-[#ffffffff] border-b-[0px] border-b-[#ffffffff] absolute"></div>

                <div className="absolute w-[6.48%] h-[100%] top-[0%] left-[93.52%] opacity-[1] z-[4]  rotate-[0deg]   rounded-full [box-shadow:inset_0_0_0_1px_#ffffffff,inset_0_0_1px_0_#ffffffff,inset_0_1px_0_0_#ffffffff,inset_1px_0_0_0_#ffffffff] border-l-[0px] border-l-[#ffffffff] border-r-[0px] border-r-[#ffffffff] border-t-[0px] border-t-[#ffffffff] border-b-[0px] border-b-[#ffffffff] absolute"></div>
              </div>
            </div>
          </div>

          <div className="absolute w-[100%] h-[54.49%] top-[45.51%] left-[0%] opacity-[1] z-[2]  rotate-[0deg]    gradient-3 absolute"></div>
        </section>
        {/* Features1 */}
        <section className="absolute w-[100.05%] h-[21.5%] top-[36.97%] left-[-0.05%] opacity-[1] z-[3]  rotate-[0deg] absolute">
          <div className="absolute w-[60.54%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[1]  rotate-[0deg]    gradient-4 absolute"></div>

          <div className="absolute w-[39.82%] h-[100%] top-[0%] left-[60.18%] opacity-[1] z-[2]  rotate-[0deg]   bg-[#000000ff] absolute"></div>

          <div className="absolute w-[99.95%] h-[89.55%] top-[6.55%] left-[0.05%] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden absolute">
            <img
              src="https://s3-alpha-sig.figma.com/img/de7c/7b66/015d0f4dc4f91eab293b2446b1fe3577?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZZ07h2ACOf2lLwg0UmivDflm81mJ6llpseL6~VKQzgQaDi9--u-GnVJiGp~11Z0biMuGvbfx77-vdHig1VW-47XC6dijABIusXhcvr4ForZJ8Sfanm4SXi83C5Oq1Akk60KFyIsziy0Gp2TLuzGeB33h3aGO2k4WniOKzRYcu0COhbzHHi50Ra48aIOssmQz-RY1uvEHjFF9CxrUMR03OksQuLwhac7eqcOZm7dEZRCe977IHL~Qn5qu2Vi4xecIPvMfkJ~NCtTK7qA7mE2q8yfvTUYAUIY9MXr56m80k1a7tb8WsMD6YHOFTbpaItsYSPbQhnL5WIxaCrbtkNmfBg__"
              className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat object-cover bg-crop"
              alt="7175-ALT"
            />{" "}
          </div>

          <div className="absolute w-[36.23%] h-[51.14%] top-[21.97%] left-[60.18%] opacity-[1] z-[3]  rotate-[0deg] absolute">
            <div className="absolute w-[72.84%] h-[27.73%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg] absolute">
              <div className="absolute w-[48.72%] h-[21.05%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px] absolute">
                <span className="h3-7180-0">{`Why so special?`}</span>
              </div>

              <div className="absolute w-[100%] h-[69.01%] top-[30.99%] left-[0%] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
                <span className="h1-7181-0">{`features`}</span>
              </div>
            </div>

            <div className="absolute w-[100%] h-[61.89%] top-[38.11%] left-[0%] opacity-[1] z-[1]  rotate-[0deg] absolute">
              <div className="absolute w-[84.63%] h-[100%] top-[0%] left-[9.34%] opacity-[1] z-[1]  rotate-[0deg] absolute">
                <div className="absolute w-[100%] h-[38.7%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg] absolute">
                  <div className="absolute w-[100%] h-[39.94%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px] absolute">
                    <span className="feature-1-7191-0">{`SURVIVE AT ALL COSTS`}</span>
                  </div>

                  <div className="absolute w-[61.55%] h-[52.61%] top-[47.39%] left-[0%] opacity-[1] z-[1]  rotate-[0deg]   text-justify leading-[0px] absolute">
                    <span className="text-of-feature-7192-0">{`You have 30 minutes to find a relic, signal for extraction, and grab
one of three spots on the rescue chopper.`}</span>
                  </div>
                </div>

                <div className="absolute w-[100%] h-[9.96%] top-[59.39%] left-[0%] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
                  <span className="feature-2-7193-0">{`CREATE ALLIES AND ENEMIES`}</span>
                </div>

                <div className="absolute w-[100%] h-[9.96%] top-[90.04%] left-[0%] opacity-[1] z-[2]  rotate-[0deg]   text-left leading-[0px] absolute">
                  <span className="feature-3-7194-0">{`IMPRESS THE AUDIENCE`}</span>
                </div>
              </div>

              <div className="absolute w-[2.01%] h-[94.31%] top-[2.84%] left-[0%] opacity-[1] z-[0]  rotate-[0deg] absolute">
                <div className="absolute w-[100%] h-[3.89%] top-[0%] left-[0%] opacity-[1] z-[4]  rotate-[90deg]   rounded-full bg-[#ffffffff] [box-shadow:inset_0_0_0_1px_#ffffffff,inset_0_0_1px_0_#ffffffff,inset_0_1px_0_0_#ffffffff,inset_1px_0_0_0_#ffffffff] border-l-[0px] border-l-[#ffffffff] border-r-[0px] border-r-[#ffffffff] border-t-[0px] border-t-[#ffffffff] border-b-[0px] border-b-[#ffffffff] absolute"></div>

                <div className="absolute w-[14%] h-[57.22%] top-[1.94%] left-[43%] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden box-border absolute">
                  <div className="nodeBg-7186 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>

                <div className="absolute w-[100%] h-[3.89%] top-[59.17%] left-[0%] opacity-[1] z-[1]  rotate-[90deg]   rounded-full [box-shadow:inset_0_0_0_1px_#ffffffff,inset_0_0_1px_0_#ffffffff,inset_0_1px_0_0_#ffffffff,inset_1px_0_0_0_#ffffffff] border-l-[0px] border-l-[#ffffffff] border-r-[0px] border-r-[#ffffffff] border-t-[0px] border-t-[#ffffffff] border-b-[0px] border-b-[#ffffffff] absolute"></div>

                <div className="absolute w-[14%] h-[32.22%] top-[63.06%] left-[43%] opacity-[1] z-[3]  rotate-[0deg] overflow-hidden box-border absolute">
                  <div className="nodeBg-7187 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>

                <div className="absolute w-[100%] h-[3.89%] top-[96.11%] left-[0%] opacity-[1] z-[0]  rotate-[90deg]   rounded-full [box-shadow:inset_0_0_0_1px_#ffffffff,inset_0_0_1px_0_#ffffffff,inset_0_1px_0_0_#ffffffff,inset_1px_0_0_0_#ffffffff] border-l-[0px] border-l-[#ffffffff] border-r-[0px] border-r-[#ffffffff] border-t-[0px] border-t-[#ffffffff] border-b-[0px] border-b-[#ffffffff] absolute"></div>
              </div>
            </div>
          </div>
        </section>
        {/* Requirements1 */}
        <section className="absolute w-[100.05%] h-[21.53%] top-[56.51%] left-[-0.05%] opacity-[1] z-[2]  rotate-[0deg] absolute">
          <div className="absolute w-[100%] h-[21.11%] top-[0%] left-[0%] opacity-[1] z-[3]  rotate-[0deg]    gradient-5 absolute"></div>

          <div className="absolute w-[99.95%] h-[89.4%] top-[10.6%] left-[0.05%] opacity-[1] z-[0]  rotate-[0deg] absolute">
            <div className="absolute w-[100%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden absolute">
              <img
                src="https://s3-alpha-sig.figma.com/img/4620/0856/0e589001334eefe42a0800bd22f7a5f8?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=On3UIbKL2KvQmkS7CsL87tGWuGu7GMuo5ohGXJy9-BwsIpgHHd7KrSNMhyCvnKnadO-BbUYmOsP6dkCV6e28D7Ii3hXov-t~KuQJ6ncgIy0ezzbyg1BvfKeQHB90hQdYKMYBhah~yOfN~-mk1ZI8Xakii7~GUQWBRvmtVCeOf~9MiFe11va4S5nKWQc9KPc3dryB8qCquFYFWkBcy5eXL2W5ZojFBxdXmMZG2DneMm-r3VPdKxN8oRK0mWbpzFl48ll4lhAjOfmweSZ2wQnlPh2W03aFYtw~2W8gQW75fmTMlKHM-ui5BgD4df7h-DJy2aSCsr~FlIg3XTGcxGegUA__"
                className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
                alt="7144-ALT"
              />{" "}
            </div>

            <div className="absolute w-[100%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[1]  rotate-[0deg]    gradient-6 absolute"></div>
          </div>

          <div className="absolute w-[63.14%] h-[13.58%] top-[23.26%] left-[18.43%] opacity-[1] z-[2]  rotate-[0deg] absolute">
            <div className="absolute w-[42.79%] h-[21.95%] top-[0%] left-[28.61%] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px] absolute">
              <span className="sub-heading-7171-0">{`Can My Computer Run this game?`}</span>
            </div>

            <div className="absolute w-[100%] h-[71.95%] top-[28.05%] left-[0%] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
              <span className="heading-7172-0">{`system requirements`}</span>
            </div>
          </div>

          <div className="absolute w-[29.84%] h-[33.17%] top-[43.74%] left-[6.92%] opacity-[1] z-[1]  rotate-[0deg] absolute">
            <div className="absolute w-[100%] h-[100%] top-[0%] left-[0%] opacity-[0.3] z-[0]  rotate-[0deg] mix-blend-normal absolute">
              <div className="absolute w-[100.17%] h-[100.25%] top-[-0.12%] left-[-0.09%] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
                <div className="nodeBg-7148 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>

              <div className="absolute w-[0.17%] h-[62.86%] top-[-0.12%] left-[48.2%] opacity-[1] z-[3]  rotate-[0deg] overflow-hidden box-border absolute">
                <div className="nodeBg-7151 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>

              <div className="absolute w-[100.11%] h-[0.25%] top-[31.14%] left-[-0.03%] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden box-border absolute">
                <div className="nodeBg-7150 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>

              <div className="absolute w-[100.1%] h-[0.25%] top-[62.49%] left-[-0.01%] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border absolute">
                <div className="nodeBg-7149 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
              </div>
            </div>

            <div className="absolute w-[89.73%] h-[91.34%] top-[3.71%] left-[2.71%] opacity-[1] z-[2]  rotate-[0deg] absolute">
              <div className="absolute w-[50.1%] h-[52.7%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg] absolute">
                <div className="absolute w-[100%] h-[43.48%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg] absolute">
                  <div className="absolute w-[17.47%] h-[34.58%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px] absolute">
                    <span className="os-7162-0">{`OS:`}</span>
                  </div>

                  <div className="absolute w-[100%] h-[53.5%] top-[46.5%] left-[0%] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
                    <span className="windows-7163-0">{`Windows 7 64-bit only
(No OSX support at this time)

`}</span>
                  </div>
                </div>

                <div className="absolute w-[47.74%] h-[32.15%] top-[67.85%] left-[0%] opacity-[1] z-[1]  rotate-[0deg] absolute">
                  <div className="absolute w-[100%] h-[46.77%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px] absolute">
                    <span className="memory-7165-0">{`mEMORY:`}</span>
                  </div>

                  <div className="absolute w-[68.29%] h-[35.48%] top-[64.52%] left-[0%] opacity-[1] z-[1]  rotate-[0deg]   text-justify leading-[0px] absolute">
                    <span className="c-8-gb-7166-0">{`8 GB RAM`}</span>
                  </div>
                </div>
              </div>

              <div className="absolute w-[100%] h-[25.44%] top-[74.56%] left-[0%] opacity-[1] z-[1]  rotate-[0deg] absolute">
                <div className="absolute w-[27.8%] h-[31.14%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px] absolute">
                  <span className="graphics-7168-0">{`GRAPHICS:`}</span>
                </div>

                <div className="absolute w-[100%] h-[57.05%] top-[42.95%] left-[0%] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
                  <span className="nvidia-7169-0">{`NVIDIA GeForce GTX 660 2GB or 
AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)
 

`}</span>
                </div>
              </div>
            </div>

            <div className="absolute w-[45.02%] h-[48.01%] top-[3.71%] left-[51.57%] opacity-[1] z-[1]  rotate-[0deg] absolute">
              <div className="absolute w-[100%] h-[48.54%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg] absolute">
                <div className="absolute w-[63.17%] h-[31.06%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px] absolute">
                  <span className="processor-7154-0">{`pROCESSOR:`}</span>
                </div>

                <div className="absolute w-[100%] h-[58.23%] top-[41.77%] left-[0%] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
                  <span className="intel-core-7155-0">{`Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ

`}</span>
                </div>
              </div>

              <div className="absolute w-[66.65%] h-[32.23%] top-[67.77%] left-[0%] opacity-[1] z-[1]  rotate-[0deg] absolute">
                <div className="absolute w-[61.05%] h-[46.77%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px] absolute">
                  <span className="storage-7157-0">{`storage:`}</span>
                </div>

                <div className="absolute w-[100%] h-[35.48%] top-[64.52%] left-[0%] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
                  <span className="c-8-gb-available-7158-0">{`8 GB available space`}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Subscribe1 */}
        <section className="absolute w-[95.6%] h-[12.38%] top-[79.2%] left-[2.19%] opacity-[1] z-[1]  rotate-[0deg] absolute">
          <div className="absolute w-[24.27%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg] absolute">
            <div className="absolute w-[100%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[1]  rotate-[0deg]    gradient-7 absolute"></div>

            <div className="absolute w-[92.57%] h-[94.41%] top-[3.22%] left-[7.43%] opacity-[1] z-[0]  rotate-[0deg]  scale-x-[-1]   overflow-hidden absolute">
              <img
                src="https://s3-alpha-sig.figma.com/img/98dd/739f/0499f057daa2701987ce1647f7f06367?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=O2PRG7pypDkQsdgnoENJ--bZJNfuM9H8G3PtS9griJJCakcsBHpR2S3Jq00XWp3-ZbMf3RK0yDQmXwh2piOo336SLszXWCKJYsf~FlnnauUpZBML-FK~p4ip6xiwtTdgT6FS1q6CJ7NsOVO~VGswLSCS6DlhZ62VozdXT2rfRVUlVn-InuOMwnC7UGSJSF8jkDEfoEiSBFdh-pyjmvWPPRQwgKYmEnbcjFT~nlqVbuEJJe-5QfiuOyOlHPuBPji6~W9l0zo4gV7WtMjBs5Rmkq1FNNSGCmPMeF6Cwk~JYcHgGVCrw8uxNlJKN5SCc7MktvRN3B-kfDgh1gixC8BGtQ__"
                className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
                alt="7129-ALT"
              />{" "}
            </div>
          </div>

          <div className="absolute w-[68.1%] h-[64.8%] top-[17.6%] left-[31.9%] opacity-[1] z-[1]  rotate-[0deg] absolute">
            <div className="absolute w-[100%] h-[64%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg] absolute">
              <div className="absolute w-[100%] h-[55.56%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg] absolute">
                <div className="absolute w-[27.36%] h-[22.5%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px] absolute">
                  <span className="h3-7134-0">{`Want to stay in touch?`}</span>
                </div>

                <div className="absolute w-[100%] h-[73.75%] top-[26.25%] left-[0%] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
                  <span className="h1-7135-0">{`newsletter SUBSCRIBE `}</span>
                </div>
              </div>

              <div className="absolute w-[66.48%] h-[36.46%] top-[63.54%] left-[0%] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px] absolute">
                <span className="text-7136-0">{`In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about game. We don’t spam.`}</span>
              </div>
            </div>

            <div className="absolute w-[51.36%] h-[13.78%] top-[86.22%] left-[0%] opacity-[1] z-[1]  rotate-[0deg] absolute">
              <div className="absolute w-[56.7%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   rounded-[5px] bg-[#ffffff14] box-border absolute">
                <div className="absolute w-[89.01%] h-[32.26%] top-[33.87%] left-[5.49%] opacity-[0.5] z-[0]  rotate-[0deg]   text-left leading-[0px] mix-blend-normal absolute">
                  <span className="your-email-addr-7139-0">{`Your email address`}</span>
                </div>
              </div>

              <div className="absolute w-[40.19%] h-[100%] top-[0%] left-[59.81%] opacity-[1] z-[1]  rotate-[0deg]   rounded-[4px] bg-[#3db8a5ff] absolute">
                <div className="absolute w-[44.96%] h-[35.48%] top-[32.26%] left-[27.52%] opacity-[1] z-[0]  rotate-[0deg]   text-center leading-[0px] absolute">
                  <span className="subscribe-now-7141-0">{`S`}</span>
                  <span className="subscribe-now-7141-1">{`ubscribe now`}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer1 */}
        <section className="absolute w-[83.33%] h-[1.64%] top-[96.19%] left-[8.33%] opacity-[1] z-[0]  rotate-[0deg] absolute">
          <div className="absolute w-[64.19%] h-[72.83%] top-[0%] left-[17.91%] opacity-[1] z-[0]  rotate-[0deg] absolute">
            <div className="absolute w-[12.76%] h-[100%] top-[0%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden absolute">
              <img
                src="https://s3-alpha-sig.figma.com/img/f8ce/ac20/584408b2822452c09954e6e42ef05700?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Z3vLP9lX-nVf~HXwcYGLYmWkloBxao63BK-SOB0EgRXykejC6TmnFLx~nuVI4Pz7VCC58gXNbDDYKN6Rp69yetlJR8PtIAxN-w7D0jZTiR06NAM358ZhVZkWyLKaxfO0IjZKAmFVCSzh7Bbtk-v-3nCYa6eQk-rnr6yWi-XQSM~uilbZuVKTz8786MMRGdoXibIPoAQrOu~~vx4JnDO78eEaDotAUAjxSoiGgtTaIWFvbqdys3VJmdke9jQixPoiU2HF7jZtjhPMHk-rQkzh6EJw9A8Cs3lB1CuSaCNcdki0tca6H9c0StKmsNqWNtuWrauqtHzEwS~XrfNd9TYPIA__"
                className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
                alt="7109-ALT"
              />{" "}
            </div>

            <div className="absolute w-[61.05%] h-[32.84%] top-[67.16%] left-[38.95%] opacity-[1] z-[1]  rotate-[0deg] absolute">
              <div className="absolute w-[12.44%] h-[100%] top-[0%] left-[87.56%] opacity-[1] z-[4]  rotate-[0deg]   text-right leading-[0px] absolute">
                <span className="quotes-7115-0">{`SUBSCRIBE`}</span>
              </div>

              <div className="absolute w-[6.22%] h-[77.27%] top-[11.36%] left-[0%] opacity-[1] z-[0]  rotate-[0deg]   text-right leading-[0px] absolute">
                <span className="main-7111-0">{`MAIN`}</span>
              </div>

              <div className="absolute w-[7.66%] h-[77.27%] top-[11.36%] left-[13.56%] opacity-[1] z-[1]  rotate-[0deg]   text-right leading-[0px] absolute">
                <span className="about-7112-0">{`about`}</span>
              </div>

              <div className="absolute w-[18.02%] h-[77.27%] top-[11.36%] left-[28.55%] opacity-[1] z-[2]  rotate-[0deg]   text-left leading-[0px] absolute">
                <span className="features-7113-0">{`game features`}</span>
              </div>

              <div className="absolute w-[26.32%] h-[77.27%] top-[11.36%] left-[53.91%] opacity-[1] z-[3]  rotate-[0deg]   text-left leading-[0px] absolute">
                <span className="requirements-7114-0">{`System requirements`}</span>
              </div>
            </div>
          </div>

          <div className="absolute w-[100%] h-[0%] top-[100%] left-[0%] opacity-[0.5] z-[1]  rotate-[0deg]   [box-shadow:inset_0_0_0_0.5px_#ffffffff,inset_0_0_0.5px_0_#ffffffff,inset_0_0.5px_0_0_#ffffffff,inset_0.5px_0_0_0_#ffffffff] border-l-[0px] border-l-[#ffffffff] border-r-[0px] border-r-[#ffffffff] border-t-[0px] border-t-[#ffffffff] border-b-[0px] border-b-[#ffffffff] absolute"></div>
        </section>
      </div>
    </div>
  );
};
ReactDOM.createRoot(document.getElementById("dualite-root")).render(<App />);
