import { policyContent } from "../../consts";

export const PrivacyPolicy = () => {
  return (
    <main id="main" style={{ padding: "10px !important" }}>
      <div id="content" className="content-area page-wrapper" role="main">
        <div className="row row-main">
          <div className="large-12 col">
            <div className="col-inner">

             <h1 style={{ color: "#223268" }}>Privacy Policy</h1>

             <div>
                {policyContent.map((section, index) => {
                  if (section.type === 'header') {
                    const HeaderTag = `h${section.level}`;
                    return <HeaderTag key={index} style={{ fontSize: '18px', lineHeight: '30px', color: "#223268" }}>{section.text}</HeaderTag>;
                  } else if (section.type === 'paragraph') {
                    return <p key={index}>{section.text}</p>;
                  } else {
                    return null;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
};
