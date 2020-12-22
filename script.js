
function displayContent(container) {
    jQuery(".containers").addClass("hideContainer");
    jQuery("#" + container).removeClass("hideContainer");
    jQuery('#personalInfo').load( "data/" + container + ".html");
}

function showImageInput() {
        jQuery('.profile-image-container').show();
        Swal.fire(
            'Good job!',
            'You can change the image',
            'success'
          )
}

const changeData = function() {
    jQuery("#previous-email").html(
        jQuery("#email").val()
    );
    jQuery('#previous-name').html(
        jQuery("#name").val()
    );
    if((jQuery('#image-url').val() !== "")) {
        jQuery('#profile-image').attr('src', jQuery("#image-url").val()); 
     }
    }


function changeTheme(){
    if ($('body').hasClass('theme')){
        $('body').removeClass('theme');
        $('body').addClass('darktheme');
    } else {
        $('body').removeClass('darktheme');
        $('body').addClass('theme');
    }
}

function editCompanyInfo(){
    $('#company-info-data').hide();
    $('#text-area-container').show();
    $('#text-area').val($('#company-info-data').html());
    $('#text-area').css({width: '400px', height: '400px'});
    $('#company-info-btn').hide();
    $('#save-btn').removeClass('hideContainer');
}

function saveCompanyInfo() {
        $('#text-area-container').hide();
        $('#company-info-data').show();
        $('#save-btn').addClass('hideContainer');
        $('#company-info-btn').show();
        $('#company-info-data').html($('#text-area').val());
}

function loadCountries(){
    $.ajax({ 
        url: 'http://127.0.0.1:5500/class_3%20-%20SPA/countries/countries.json',
        success: function(response){
            let countries = Object.entries(response);
            countries.forEach(function(country){
                console.log(country);
                jQuery('#country-list').append('<option value=' + country[0] + '>' + country[1] + '</option>');
            })
                
            },
        dataType: 'json'
      });
}

