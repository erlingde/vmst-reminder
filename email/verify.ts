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
            <mj-text font-style="italic" font-size="20px" font-family="Poppins, Helvetica Neue" color="white">Hey you! Please confirm your e-mail address below</mj-text>

            <mj-button href="{{host}}/verify/{{id}}" background-color="white" color="#00765f" font-family="Poppins, Helvetica Neue" padding-top='35px'>Verify E-Mail</mj-button>
                    <mj-text color="white" padding-top="50px" font-family="Poppins, Helvetica Neue">If you received this e-mail by mistake, simply delete it. You won't be subscribed if you don't click on the confirmation link above.</mj-text>
            </mj-column>
        </mj-section>
    </mj-body>
</mjml>`
