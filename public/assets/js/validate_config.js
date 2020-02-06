$(function(){
  $('#form_signup').validate({
    rules: {
      email_1: {
        required: true,
        email: true
      },
      email_2: {
        required: true,
        email: true
      }
    },
    messages: {
      email_1: {
        required: 'メールアドレスを入力してください。',
        email: '入力値の形式が誤っています。再度入力して下さい。'
      },
      email_2: {
        required: 'メールアドレス(再入力)を入力してください。',
        email: '入力値の形式が誤っています。再度入力して下さい。'
      }
    },
    errorPlacement: function(error, element) {
        if (element.attr('name') == 'email_1') {
            error.insertAfter("#error_email_1");
        }
        if (element.attr('name') == 'email_2') {
            error.insertAfter("#error_email_2");
        }
    }
  });

  $('#form_login').validate({
    rules: {
      email_3: {
        required: true,
        email: true
      },
      password_1: {
        required: true,
      }
    },
    messages: {
      email_3: {
        required: 'メールアドレスを入力してください。',
        email: '入力値の形式が誤っています。再度入力して下さい。'
      },
      password_1: {
        required: 'パスワードを入力してください。',
      }
    },
    errorPlacement: function(error, element) {
        if (element.attr('name') == 'email_3') {
            error.insertAfter("#error_email_3");
        }
        if (element.attr('name') == 'password_1') {
            error.insertAfter("#error_password_1");
        }
    }
  });
  $('#form_repush').validate({
    rules: {
      repush_email: {
        required: true,
        email: true
      },
      repush_birthday: {
        required: true,
      }
    },
    messages: {
      repush_email: {
        required: 'メールアドレスを入力してください。',
        email: '入力値の形式が誤っています。再度入力して下さい。'
      },
      repush_birthday: {
        required: '生年月日を入力してください。',
      }
    },
    errorPlacement: function(error, element) {
        if (element.attr('name') == 'repush_email') {
            error.insertAfter("#error_repush_email");
        }
        if (element.attr('name') == 'repush_birthday') {
            error.insertAfter("#error_repush_birthday");
        }
    }
  });
});