    
$(() =>{

    $(`.available`).on(`click`, (e) => {
        $(`#form`).removeClass(`hide`);
        $(`#form`).addClass(`show`);
        let tableNumber = (e.target.firstChild.data);

        $(`#table-number`).text(tableNumber);
        let tableNumberId =  `#table-${tableNumber}`;

$(`#save-button`).on(`click`, () =>{
    $(tableNumberId).removeClass(`available`);
    $(tableNumberId).addClass(`reserved`);
    $(`#form`).removeClass(`show`);
    $(`#form`).addClass(`hide`);
    $(`#name`).val("");
    $(`#phone-number`).val("");
    $(`#guest-number`).val("");
});

$(`.icon`).on(`click`, () => {
    
    $(`#form`).removeClass(`show`);
    $(`#form`).addClass(`hide`);
    $(`#name`).val("");
    $(`#phone-number`).val("");
    $(`#group-size`).val("")


});


});

});
