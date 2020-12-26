$(function() {
    $('#email').change(()=>{
       let entered =  $('#email').val();
       if (!entered) {
        $('#email').removeClass();
        return;
       }
       else {
        if (!validateEmail(entered)) {
            $('#email').addClass('error');
            return;
        }
        $('#email').addClass('success');
       }
    });

    $('#password').change(()=>{
        let entered =  $('#password').val();
        if (!entered) {
         $('#password').removeClass();
         return;
        }
        else {
         if (entered === 'password') {
             $('#password').addClass('success');
             return;
         }
         $('#password').addClass('error');
        }
     });

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});