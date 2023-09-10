const { emailFooter } = require('../common/footer.template');
const { emailHead } = require('../common/head.template');

export const registerTemp = (fName, course, tools, period, manualUrl) => {
  const head = emailHead();
  const footer = emailFooter();

  const body = `
  
    <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto;">
      <tbody>
        <tr>
          <td>
            <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; background-color: #eef4f3; background-size: auto; border: 0 solid #efeef4; width: 700px; margin: 0 auto;" width="700">
              <tbody>
                <tr>
                  <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; background-color: #ffffff; padding-bottom: 20px; padding-left: 25px; padding-right: 25px; padding-top: 20px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                    <table class="heading_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                      <tr>
                        <td class="pad" style="padding-bottom:20px;padding-top:10px;text-align:center;width:100%;">
                          <h2 style="margin: 0; color: #20042D; direction: ltr; font-family: Inter, sans-serif; font-size: 15px; font-weight: 700; letter-spacing: normal; line-height: 120%; text-align: left; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">Dear ${fName},&nbsp;</span></h2>
                        </td>
                      </tr>
                    </table>
                    <table class="paragraph_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                      <tr>
                        <td class="pad">
                          <div style="color:#201f42;direction:ltr;font-family:Inter, sans-serif;font-size:14px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:left;mso-line-height-alt:21px;">
                            <p style="margin: 0; margin-bottom: 0px;">
                              Welcome to ${process.env.APP_NAME}, budding Dev.
                              Thank you for your interest in learning to become the next <b>${course} Geek</b> in the country through our IT training institute. You are up for a big ride, much more than you can find from any other institute. You're one step closer to accessing proper mentorship and guidance from some of the best and experienced hands in the business.
                              </p>
                              <p style="margin: 0; margin-bottom: 0px;">&nbsp;</p>
                              <p style="margin: 0; margin-bottom: 0px;">
                              Your selected course includes but not limited to ${tools} - from absolute beginners to industry required advanced level.</p>

                              <p style="margin: 0; margin-bottom: 0px;">&nbsp;</p>
                              <p style="margin: 0; margin-bottom: 0px;">
                                <b>Selected Career Course: ${course}</b>
                              </p>

                              <p style="margin: 0; margin-bottom: 0px;">&nbsp;</p>
                              <p style="margin: 0; margin-bottom: 0px;">
                                <b>Training Duration: 6 - 8 months</b>
                              </p>

                              <p style="margin: 0; margin-bottom: 0px;">&nbsp;</p>
                              <p style="margin: 0; margin-bottom: 0px;">
                                <b>Class Periods: ${period}</b>
                              </p>

                              <p style="margin: 0; margin-bottom: 0px;">&nbsp;</p>
                              <p style="margin: 0; margin-bottom: 0px;">
                                <b>Tools Needed:</b>
                                <ul style="padding:0px; margin:0px">
                                <li> A laptop or desktop computer </li>
                                <li> Internet </li>
                                </ul>
                              </p>
                          </div>
                        </td>
                      </tr>
                    </table>
                    
                    <table class="paragraph_block block-5" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                      <tr>
                        <td class="pad" style="padding-top:10px;">
                          <div style="color:#201f42;direction:ltr;font-family:Inter, sans-serif;font-size:14px;font-weight:400;letter-spacing:0px;line-height:150%;text-align:left;mso-line-height-alt:21px;">
                            <p style="margin: 0;">To continue with your registration or enquiry, <a href="https://wa.me/2349046832081">click here to message us directly on WhatsApp</a>.Welcome to ${process.env.APP_NAME} once again.</p>
                          </div><br/>
                        </td>
                      </tr>
                    </table>
                    <p style="margin: 0; margin-bottom: 5px;">&nbsp;</p>
                    <table class="image_block block-4" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                      <tr>
                        <td class="pad" style="width:100%; margin-top:15px">
                          <div class="alignment" align="center" style="line-height:10px"><img src="https://demo.stripocdn.email/content/guids/e55dd9b4-b477-449e-b822-e14dd4987871/images/post1.jpg" style="height: auto; display: block; border: 0; max-width: 441px; width: 100%;" width="441"></div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>

  `;

  const template = `${head} ${body} ${footer}`;

  return template;
};
