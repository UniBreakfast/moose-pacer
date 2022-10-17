export { makeForm }

const inputTypeDict = {
  n: 'number',
  b: 'checkbox',
  r: 'radio',
  p: 'password',
  e: 'email',
  u: 'url',
  s: 'search',
  c: 'color',
  f: 'file',
  m: 'month',
  w: 'week',
  d: 'date',
  t: 'time',
  dt: 'datetime-local',
  rs: 'reset',
  tel: 'tel',
  img: 'image',
  rng: 'range',
  sub: 'submit',
  btn: 'button',
}

// describes an empty form
const simplestDescriptor = ``

// describes a form with a single input
const descriptorWithOneDefaultInput = `
  []
`

// describes a form with an input with placeholder
const descriptorWithOneInputWithPlaceholder = `
  [enter your text here]
`

// describes a form with a title made of an h2
const descriptorWithOneDefaultTitle = `
  This is a Form Title

  [this is a placeholder]
`

// describes a form with an input inside a label
const descriptorWithOneInputInsideLabel = `
  Label for Input: []
`

// describes a form with one required input and one optional input
const descriptorWithOneRequiredInput = `
  [you must enter something here]*
  [you can enter something here]
`

// describes a form with a number input, a checkbox input, and a range input
const descriptorWithThreeSpecificInputs = `
  [size]n
  []b
  []rng
`

// describes a form where inputs have names
const descriptorWithNamedInputs = `
  [Username] username
  [Password]p password
`

// describes a form with two buttons
const descriptorWithTwoButtons = `
  Enter your name

  [Jonh Doe] username

  (Ok)  (Cancel)
`

// describes a form with buttons of certain types
const descriptorWithButtonsOfCertainTypes = `
  Name: [Jonh Doe]

  (Remember Me)sub  (Changed my mind)rs  (Forget it)btn
`

// describes a form with a paragraph below the inputs
const descriptorWithParagraph = `
  Register

  Username: [Preferred username]* username
  Password: [Preferred password]p* password1
  
  Use strong password!

  (Register)sub  (Cancel)btn
`

// describes a form where elements are with custom attributes
const descriptorWithCustomAttributes = `
  Log In! {.form-title}

  Username: [username]* username {#nameInput}
  Password: [password]p* {[minlength=8]}

  Use your credentials to log in. {.inform-output}

    (Log In)sub    (Cancel)btn
  {.green-button} {.red-button}
`
/* 
const descriptors = {
  simplestDescriptor,
  descriptorWithOneDefaultInput,
  descriptorWithOneInputWithPlaceholder,
  descriptorWithOneDefaultTitle,
  descriptorWithOneInputInsideLabel,
  descriptorWithOneRequiredInput,
  descriptorWithThreeSpecificInputs,
  descriptorWithNamedInputs,
  descriptorWithTwoButtons,
  descriptorWithButtonsOfCertainTypes,
  descriptorWithParagraph,
  descriptorWithCustomAttributes,
}

Object.entries(descriptors).forEach(([name, descriptor]) => console.log({ name, descriptor, result: parse(descriptor) }))
 */

function parse(descriptor) {
  const doneBefore = parse.cache?.[descriptor]

  if (doneBefore) return doneBefore

  const titles = []
  const inputs = []
  const notes = []
  const buttons = []

  if (!descriptor) return { titles, inputs, notes, buttons }

  const lines = descriptor.trim().split(/\n\s*/)

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const nextLine = lines[i + 1]
    const items = []

    let cat

    if (hasInput(line)) {
      items.push(line)
      cat = inputs
    } else if (hasButton(line)) {
      items.push(...line.split(/\s+(?=\()/))
      cat = buttons
    } else {
      items.push(line)
      cat = inputs.length ? notes : titles
    }

    if (nextLine?.startsWith('{')) {
      const attrs = nextLine.match(/{[^}]+}/g)

      for (let j = 0; j < attrs.length; j++) {
        items[j] += ' ' + attrs[j]
      }

      i++
    }

    cat.push(...items)
  }
  
  const result = { titles, inputs, notes, buttons }

  parse.cache = Object.assign(parse.cache || {}, { [descriptor]: result })

  return result
}

function hasInput(line) {
  return !!line.match(/(: |^)\[[^\]]*\]/)
}

function hasButton(line) {
  return !!line.match(/^\([^\)]*\)/)
}

function makeForm(descriptor) {
  const form = document.createElement('form')

  form.action = 'javascript:'

  for (const each of parse(descriptor).titles)
    form.append(makeTitle(each))

  for (const each of parse(descriptor).inputs)
    form.append(makeInput(each))
    
  for (const each of parse(descriptor).notes)
    form.append(makeNote(each))

  for (const each of parse(descriptor).buttons)
    form.append(makeBtn(each))

  return form
}

// makeTitle('Abc {#id .class1 .class2 [hidden] [data-x=42]}').outerHTML
// <h2 id="id" class="class1 class2" hidden data-x="42">Abc</h2>

function makeTitle(line) {
  const h2 = document.createElement('h2')

  h2.textContent = line

  if (line.includes('{')) addAttributes(h2, line)

  return h2
}

// makeInput('Label: [placeholder]p* pwd {#id .class1 .class2 [hidden] [data-x=42]}').outerHTML
// <label><span>Label</span><input id="id" class="class1 class2" hidden data-x="42" type="password" placeholder="placeholder" required name="pwd"></label>

// makeInput('[placeholder]dt {.class1}').outerHTML
// <input class="class1" type="datetime-local" placeholder="placeholder">
function makeInput(line) {
  const input = document.createElement('input')
  const placeholder = line.match(/(?<=\[)[^\]]+(?=\])/)?.[0]
  const type = line.match(/(?<=\])\w+/)?.[0]
  const required = line.match(/(?<=]\w*)\*/)
  const name = line.match(/(?<=]\w*\*? )[\w-]+/)?.[0]

  if (placeholder) input.placeholder = placeholder
  if (type) input.type = inputTypeDict[type]
  if (required) input.required = true
  if (name) input.name = name

  if (line.includes('{')) addAttributes(input, line)

  if (!line.includes(': ')) return input

  const label = document.createElement('label')
  const span = document.createElement('span')

  span.textContent = line.split(': ')[0]
  label.append(span, input)

  return label
}

// makeNote('Some text {#id .class1 .class2 [hidden] [data-x=42]}').outerHTML
// <p id="id" class="class1 class2" hidden data-x="42">Some text</p>
function makeNote(line) {
  const p = document.createElement('p')
  const text = line.split(/\s+\{/)[0]

  p.textContent = text

  if (line.includes('{')) addAttributes(p, line)

  return p
}

// makeBtn('(Log In)sub {.green-button}').outerHTML
// <button type="submit" class="green-button">Log In</button>
function makeBtn(line) {
  const btn = document.createElement('button')
  const label = line.match(/(?<=\()[^\)]+(?=\))/)?.[0]
  const type = line.match(/(?<=\([^\)]+\))\w+/)?.[0]
  const name = line.match(/(?<=\)[^\)]+ )[\w-]+/)?.[0]

  if (label) btn.textContent = label
  if (type) btn.type = inputTypeDict[type]
  if (name) btn.name = name

  if (line.includes('{')) addAttributes(btn, line)

  return btn
}

function addAttributes(el, line) {
  const attrs = line.match(/(?<=\{)[^}]+(?=\})/g)?.[0].split(/\s+/)

  for (let attr of attrs) {
    if (attr.startsWith('#')) {
      el.id = attr.slice(1)
    } else if (attr.startsWith('.')) {
      el.classList.add(...attr.slice(1).split('.'))
    } else if (attr.startsWith('[')) {
      const [name, value] = attr.slice(1, -1).split('=')

      el.setAttribute(name, value)
    }
  }
}
