export default `
  <mjml>
    <mj-body border-radius="50%">
      <mj-raw>
        <!-- Company Header -->
      </mj-raw>
      <mj-section background-color="#fafafa">
        <mj-column width="400px">
          <mj-text font-style="italic" font-size="20px" font-family="Helvetica Neue" color="#626262">Just a reminder to verify your job search for this month!</mj-text>
          <mj-text color="#525252">Stay strong and best of luck with your job search beautiful human you!</mj-text>
          <mj-button background-color="#00765f" href="https://vinnumalastofnun.is">Vinnumálastofnun</mj-button>
        </mj-column>
      </mj-section>
    
      <mj-raw>
        <!-- Footer -->
      </mj-raw>
      <mj-section background-color="#fafafa" border-top="1px solid #00765f">
        <mj-column width="400px">
          <mj-text font-style="italic" font-size="15px" font-family="Helvetica Neue" color="#626262">Don't want to see these emails anymore?</mj-text>
          <mj-button background-color="orange" href="https://vmst-reminder.vercel.app/unsubscribe/{{id}}">Unsubscribe</mj-button>
        </mj-column>
      </mj-section>
    </mj-body>
  </mjml>`
