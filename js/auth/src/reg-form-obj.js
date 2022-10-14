export const regFormSetup = {
  title: 'Register',
  fields: [
    {
      label: 'Username',
      name: 'username',
      type: 'text',
      placeholder: 'Preferred username',
      required: true,
    },
    {
      label: 'Password',
      name: 'password1',
      type: 'password',
      placeholder: 'Preferred password',
      required: true,
    },
    {
      label: 'Confirm Password',
      name: 'password2',
      type: 'password',
      placeholder: 'Same password',
      required: true,
    },
  ],
  elements: [
    {
      type: 'p',
      text: 'Try registering if not have an account.',
      class: 'inform-output',
    },
  ],
  buttons: [
    {
      text: 'Register',
      type: 'submit',
    },
    {
      text: 'Cancel',
      type: 'button',
    },
  ],
}
