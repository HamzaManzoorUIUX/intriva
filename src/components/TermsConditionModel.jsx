import React from 'react';
import { Modal,Button } from 'react-bootstrap';

function TermsConditionModel(props) {
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        animation={false} id="TermsModel"
      >
        <Modal.Header closeButton>
          <Modal.Title>
          Terms of Use
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <p>
          The following terms and conditions (the "Terms") set out the terms on which you may use this website. By accessing this website and the information contained herein (together, the "Site"), you acknowledge that you have read, understood, accept and agree to be bound by the Terms. If you do not agree with the Terms or are unable to abide by them, you must not use this Site.
          </p>
          <h4>
          General Information
          </h4>
          <p>
          This Site is maintained by Intriva Capital (hereinafter, "Intriva"). This Site is provided for information purposes only. Its contents are intended for investors with professional experience and knowledge in relation to financial investments.  
          </p>
          <h4>
          Use of Site
          </h4>
          <p>
Intriva may in its sole discretion terminate your access to or use of this Site of any reason, including without limitation where Intriva believes that you have not acted in accordance with the Terms.
          </p>
<h4>
No Warranty or Liability
</h4>
<p>
and is provided on an "as-is" basis with no warranty of any kind, express or implied, to the fullest extent permissible under applicable law. Intriva makes no representation as to the adequacy, accuracy, reliability, completeness or currency of any information contained in this Site and expressly disclaims any liability for errors or omissions herein.
</p>
<p>
No warranty is made that this Site or any functions included in this Site (including hyperlinks) will be uninterrupted or free of errors, delays, viruses, bugs, worms, "Trojan horses", logic bombs or other defects or harmful components.
</p>
<p>
Intriva expressly disclaims any liability, whether in contract, tort or otherwise, for any damages of any kind whatsoever and howsoever arising out of or in connection with your access or use (or inability to access or use) of this Site or reliance on its content.
</p>
<h4>
Links
</h4>
<p>
To the extent that this Site contains any links to other websites or material from third parties ("Third Party Materials"), such Third Party Materials have not been verified by Intriva. To the fullest extent permitted by applicable law, no warranty is given, whether express or implied, as to the reliability, accuracy, suitability or completeness of any information contained in such Third Party Materials. Intriva accepts no liability for any errors, omissions or other defects or harmful components in any Third Party Material, or any use or misuse thereof by you, or for any damages of any kind whatsoever and howsoever arising therefrom. You should carefully read the terms of use of any such Third Party Materials prior to using or accessing them.
</p>
<h4>
No Offer or Advice
</h4>
<p>
This Site is provided for general information purposes only. Nothing contained herein constitutes an offer, solicitation or recommendation regarding any products or services provided by Intriva, or an offer to sell or the solicitation of an offer to buy any security. Nothing in this Site is intended to, nor shall constitute, investment, legal, tax or other professional advice. You should not take any actions based on this Site without seeking professional advice.
</p>
<h4>
Copyright
</h4>
<p>
All rights, including intellectual property rights, in this Site remain the property of Intriva or are otherwise used by Intriva in accordance the relevant copyright holder's terms. No part of this Site may be reproduced in any form, or referred to in any other publication (including by way of link to third party websites) without the express written consent of Intriva. You may download and/or print any downloadable/printable material from this Site solely for personal use, but any other unauthorised use of this Site or its contents is not permitted.
</p>
<h4>
Reservation of Rights
</h4>
<p>
Intriva reserves the right to amend, remove or otherwise alter the content of this Site (including these Terms), or suspend or discontinue (temporarily or permanently) this Site, in each case without notice. You agree that Intriva shall not be liable to you or any third party for such alteration, suspension or discontinuation of this Site. It is recommended that you revisit this Site and reread the Terms periodically. Continued use of this Site after any changes to these Terms shall be deemed to constitute acceptance of the revised terms.
</p>
<h4>
No Guarantee of Performance
</h4>
<p>
Any information contained in this Site that relates to past performance must not be viewed as indication of future results. No assurance is given that any investment product offered by Intriva or referred to in this Site will achieve comparable results. Value of investments and income from investments can go down as well as up, and investors may not recover the amount of their original investment. Investments in a fund or other similar products are inherently risky and illiquid and are generally suitable only for sophisticated institutional investors.
</p>
<h4>
Indemnification
</h4>
<p>
By accessing and using this Site, you agree to indemnity Intriva and its affiliates, and each of their respective partners, stockholders, members, managers, officers, directors, employees, investment advisers and agents (collectively, the "Intriva Indemnitees") against, and hold the Intriva Indemnitees harmless from, any and all claims, demands, expense of any kind (collectively, "Claims"), including attorney's fees, arising from your use or misuse of this Site. You hereby release the Intriva Indemnitees from any and all Claims that you may have against the Intriva Indemnitees arising out of or in connection with such disputes.
</p>
<h4>
Local Law Restrictions
</h4>
<p>
Depending on the jurisdiction, local laws or regulations may prohibit or impose restrictions on the dissemination of information on this Site. There is no intention to offer or sell investment funds or other services or products in countries or jurisdictions where such offer or sale would be unlawful under the relevant domestic or local law. You must inform yourself about the laws that are in force in your country or jurisdiction. If it is unlawful to use or access this Site in your jurisdiction, you should not do so. Intriva and its affiliates accept no liability for any use or access of this Site in contravention of such local laws or regulations, and any damages of any kind whatsoever and howsoever arising in connection therewith.
</p>
<h4>
Collection of Information
</h4>
<p>
Intriva does not collect any personal information through this Site. Intriva does not sell, rent, share or trade information provided by the uses of this Site in any form, with any third party or affiliate companies.
</p>
<h4>
Site Hosting
</h4>
<p>
This Site was developed and is hosted by a third-party service provider for whose acts and omissions Intriva accepts no responsibility. Intriva expressly disclaims any responsibility for any aspect of any third-party content which may appear on or be accessed via this Site without Intriva's consent. Any link from this Site to any Third Party Materials does not constitute an endorsement by Intriva of any such Third Party Materials, or any product, service, or other offer made by such third parties. 
</p>
<h4>
Jurisdiction, Governing Law and Severability
</h4>
<p>
These Terms are governed by and construed in accordance with the laws of England and Wales and the courts of England shall have exclusive jurisdiction to resolve any disputes arising out of or in connection with this Site or these Terms. 
</p>
<p>
In the event that any part of these Terms is determined to be invalid or unenforceable pursuant to applicable law, the validity and enforceability of the other provisions shall not be affected.
</p>
<h4>
Contact Us 
</h4>
<p>
If you have any questions about these Terms, please contact us at <a href="info@intriva.com">info@intriva.com</a>
</p>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default TermsConditionModel;