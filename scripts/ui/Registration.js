class Registration {

    constructor() {
        this.$section = document.querySelector('#registration-section');

        this.$registrationForm = this.$section.querySelector('#reg-form');
        this.$registrationUsername = this.$registrationForm.querySelector('#reg-username');
        this.$registrationPassword = this.$registrationForm.querySelector('#reg-password');

        this._adapter = new ActionAdapter();

        this._registrationCallback = undefined;

        this._addEventListeners();
    }

    _addEventListeners() {
        this.$registrationForm.addEventListener('submit', (e) => {
            e.preventDefault(); // prevent form submitting

            //start loading animation
            document.getElementById('loader').style.display = 'block';

            let username = this.$registrationUsername.value;
            let password = this.$registrationPassword.value;
            this._adapter.register(username, password)
                .then(user => {
                    console.log('register.then', user);
                    this._registrationCallback(user)
                });
        });
    }

    setRegistrationCallback(callbackFn) {
        this._registrationCallback = callbackFn;
    }

    show() {
        this.$section.style.display = 'block';
    }

    hide() {
        this.$section.style.display = 'none';
    }

}