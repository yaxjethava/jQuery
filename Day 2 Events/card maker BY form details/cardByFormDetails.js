$(document).ready(() => {
    let body = $("body")
    let form = $("#myForm");
    let card = $(".card-main-wrapper");
    card.css("display", "none");

    ///// card details
    let logo_card = $(".left-side img")
    let cmp_name_card = $(".cmp-name h2")
    let cmp_tagline_card = $(".cmp-name p")
    let owner_name_card = $(".owner-name h1")
    let owner_position_card = $(".owner-name p")
    let num_card = $(".call")
    let email_card = $(".email")
    let address_card = $(".address")
    let website_card = $(".website")

    $("#submit-btn").on("click", (event) => {

        card.css("display", "flex");
        form.css("display", "none");
        body.css("background-image", "none");
        body.css("background-color", "whitesmoke");

        event.preventDefault();

        ///// form details
        let name = $("#name").val()
        let position = $("#position").val()
        let company = $("#companyName").val()
        let tagLine = $("#tagLine").val()
        let number = $("#number").val()
        let email = $("#email").val()
        console.log(email)
        let address = $("#address").val()
        let website = $("#website").val()
        let logo = $("#logo").val()

        ////// add value in card
        logo_card.attr("src", `${logo}`);
        cmp_name_card.text(`${company}`);
        cmp_tagline_card.text(`${tagLine}`);
        owner_name_card.text(`${name}`)
        owner_position_card.text(`${position}`)
        num_card.text(`${number}`)
        email_card.text(`${email}`)
        console.log(email_card)
        address_card.text(`${address}`)
        website_card.text(`${website}`)
    })

})