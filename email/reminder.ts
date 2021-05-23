export default `
<mjml>
    <mj-head>
    <mj-font name="Poppins"
        href="https://fonts.googleapis.com/css?family=Poppins" />
    </mj-head>
    <mj-body>
        <mj-section background-color="#00765f">
            <mj-column width="400px">
            <mj-image width="50px" src="https://i.ibb.co/cr85xNd/Logo-white.png" />
            <mj-text font-style="italic" font-size="20px" font-family="Poppins, Helvetica Neue" color="white">Hey you! Just a reminder to verify your job search for this month!</mj-text>
            <mj-text color="white" font-family="Poppins, Helvetica Neue">Stay strong and best of luck with your job search!</mj-text>
            <mj-button href="https://vinnumalastofnun.is" background-color="white" color="#00765f" font-family="Poppins, Helvetica Neue" padding-top='35px'>Vinnumálastofnun</mj-button>
            </mj-column>
        </mj-section>
        <mj-section background-color="#00765f" border-top="1px solid #00765f">
            <mj-column width="400px">
            <mj-divider border-width="1px" border-style="solid" border-color="lightgrey"  padding-top='35px' />
            <mj-text font-style="italic" font-size="15px" font-family="Poppins, Helvetica Neue" color='white'>Don't want to see these emails anymore?</mj-text>
            <mj-button background-color="orange" href="{{host}}/unsubscribe/{{id}}" font-family="Poppins, Helvetica Neue">Unsubscribe</mj-button>
            </mj-column>
        </mj-section>
    </mj-body>
</mjml>`
