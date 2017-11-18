/* global React, ReactDOM */
const h = React.createElement

const keys = [
  {
    key: 'a',
    normal: {
      base: 'insert after selection | →',
      alt: 'select the whole object',
    },
    goto: {
      base: 'last buffer | jump',
    },
    object: {
      base: 'angle block | object',
    },
    combine: {
      base: 'append',
    },
  },
  {
    key: 'A',
    normal: {
      base: 'insert at line end | →',
    },
  },
  {
    key: 'b',
    normal: {
      base: 'select to previous word start | ← count',
      alt: 'select to previous WORD start | ← count',
      ctrl: 'scroll one page up | ↑ count',
    },
    prompt: {
      ctrl: 'go to previous word start | ←',
    },
    goto: {
      base: 'window bottom | ↓',
    },
    view: {
      base: 'cursor on bottom | ↓',
    },
    object: {
      base: 'parenthesis block | object',
    },
  },
  {
    key: 'B',
    normal: {
      base: 'extend to previous word start | ← count',
      alt: 'extend to previous WORD start | ← count',
    },
    object: {
      base: 'braces block | object',
    },
  },
  {
    key: 'c',
    normal: {
      base: 'change selection content | register | di',
      alt: 'change selection content (not yanking)',
    },
    goto: {
      base: 'window center',
    },
    view: {
      base: 'center cursor vertically',
    },
    object: {
      base: 'custom desc | object',
    },
  },
  {
    key: 'C',
    normal: {
      base: 'copy selection on next line | ↓ count',
      alt: 'copy selection on previous line | ↑ count',
    },
  },
  {
    key: 'd',
    normal: {
      base: 'delete selection content | register',
      alt: 'delete selection content (not yanking)',
      ctrl: 'scroll half a page down | ↓',
    },
    prompt: {
      alt: 'delete under cursor',
    },
  },
  {
    key: 'D',
  },
  {
    key: 'e',
    normal: {
      base: 'select to next word end | → count',
      alt: 'select to next WORD end | → count',
    },
    prompt: {
      ctrl: 'go to previous word end | ←',
    },
    goto: {
      base: 'buffer end | ↓→ jump | %;',
    },
  },
  {
    key: 'E',
    normal: {
      base: 'extend to next word end | → count',
      alt: 'extend to next WORD end | → count',
    },
  },
  {
    key: 'f',
    normal: {
      base: 'select to next char included | → count',
      alt: 'select to previous char included | ← count',
      ctrl: 'scroll one page down | ↓ count',
    },
    goto: {
      base: 'included file | jump',
    },
  },
  {
    key: 'F',
    normal: {
      base: 'extend to next char included | → count',
      alt: 'extend to previous char included | ← count',
    },
  },
  {
    key: 'g',
    normal: {
      base: 'go to location | count jump',
    },
    goto: {
      base: 'buffer top | ↑← | %<a-;>;',
    },
    object: {
      base: 'grave quote string | object',
    },
  },
  {
    key: 'G',
    normal: {
      base: 'extend to location',
    },
  },
  {
    key: 'h',
    normal: {
      base: 'move left | ← count',
      alt: 'select to line start | ←',
    },
    prompt: {
      alt: 'move left | ←',
    },
    goto: {
      base: 'line start | ← | x<a-;>;',
    },
    view: {
      base: 'scroll left | ←',
    },
  },
  {
    key: 'H',
    normal: {
      base: 'extend left | ← count',
      alt: 'extend to line start | ←',
    },
  },
  {
    key: 'i',
    normal: {
      base: 'insert before selection | ←',
      alt: 'select inner object',
      ctrl: 'jump forward | ↓→ count',
    },
    goto: {
      base: 'line non blank start | ←',
    },
    object: {
      base: 'indent | object',
    },
    combine: {
      base: 'intersection',
    },
  },
  {
    key: 'I',
    normal: {
      base: 'insert at line start | ←',
    },
  },
  {
    key: 'j',
    normal: {
      base: 'move down | ↓ count',
      alt: 'join lines',
    },
    goto: {
      base: 'buffer bottom | ↓ jump',
    },
    view: {
      base: 'scroll down | ↓',
    },
  },
  {
    key: 'J',
    normal: {
      base: 'extend down | ↓ count',
      alt: 'join lines and select spaces',
    },
  },
  {
    key: 'k',
    normal: {
      base: 'move up | ↑ count',
      alt: 'keep selections matching given regex',
    },
    goto: {
      base: 'buffer top | ↑← jump | %<a-;>;',
    },
    view: {
      base: 'scroll up | ↑',
    },
  },
  {
    key: 'K',
    normal: {
      base: 'extend up | ↑ count',
      alt: 'keep selections not matching given regex',
    },
  },
  {
    key: 'l',
    normal: {
      base: 'move right | → count',
      alt: 'select to line end | →',
      ctrl: 'clear screen',
    },
    prompt: {
      alt: 'move right | →',
    },
    goto: {
      base: 'line end | → | xh',
    },
    view: {
      base: 'scroll right | →',
    },
  },
  {
    key: 'L',
    normal: {
      base: 'extend right | → count',
      alt: 'extend to line end | →',
    },
  },
  {
    key: 'm',
    normal: {
      base: 'select to matching char',
      alt: 'merge contiguous selections together',
    },
    view: {
      base: 'center cursor horizontally',
    },
  },
  {
    key: 'M',
    normal: {
      base: 'extend to matching char',
    },
  },
  {
    key: 'n',
    normal: {
      base: 'select next search pattern match | → count',
      alt: 'select previous search pattern match | ← count',
    },
    prompt: {
      ctrl: 'next history entry | ↓→',
    },
    insert: {
      ctrl: 'next completion candidate | ↓→',
    },
    object: {
      base: 'number | object',
    },
  },
  {
    key: 'N',
    normal: {
      base: 'extend with next search pattern match | → count',
      alt: 'extend with previous search pattern match | ← count',
    },
  },
  {
    key: 'o',
    normal: {
      base: 'insert on a new line below | ↓ count',
      alt: 'add an empty line below cursor | ↓ count',
      ctrl: 'jump backward | ↑← count',
    },
    insert: {
      ctrl: 'disable autocompletion for this insert session',
    },
    prompt: {
      ctrl: 'disable autocompletion for this prompt',
    },
  },
  {
    key: 'O',
    normal: {
      base: 'insert on a new line above | ↑ count',
      alt: 'add an empty line above cursor | ↑ count',
    },
  },
  {
    key: 'p',
    normal: {
      base: 'paste after | →',
      alt: 'paste all after | →',
    },
    prompt: {
      ctrl: 'previous history entry | ↑←',
    },
    insert: {
      ctrl: 'previous completion candidate | ↑←',
    },
  },
  {
    key: 'P',
    normal: {
      base: 'paste before | ←',
      alt: 'paste all before | ←',
    },
    object: {
      base: 'paragraph | object',
    },
  },
  {
    key: 'q',
    normal: {
      base: 'replay recorded macro | count',
    },
    object: {
      base: 'single quote string | object',
    },
  },
  {
    key: 'Q',
    normal: {
      base: 'start or end macro recording',
    },
    object: {
      base: 'double quote string | object',
    },
  },
  {
    key: 'r',
    normal: {
      base: 'replace with char',
    },
    insert: {
      ctrl: 'insert given register',
    },
    prompt: {
      ctrl: 'insert given register',
    },
    object: {
      base: 'brackets block | object',
    },
  },
  {
    key: 'R',
    normal: {
      base: 'replace selection content with paired yank text',
      alt: 'replace selection content with all yank text',
    },
  },
  {
    key: 's',
    normal: {
      base: 'select on regex',
      alt: 'split on line end',
      ctrl: 'push current selections on jump list',
    },
    object: {
      base: 'sentence | object',
    },
  },
  {
    key: 'S',
    normal: {
      base: 'split on regex',
      alt: 'split on boundaries',
    },
  },
  {
    key: 't',
    normal: {
      base: 'select till next char | → count',
      alt: 'select till previous char | ← count',
    },
    goto: {
      base: 'window top | ↑',
    },
    view: {
      base: 'cursor on top | ↑',
    },
  },
  {
    key: 'T',
    normal: {
      base: 'extend to next char | → count',
      alt: 'extend to previous char | ← count',
    },
  },
  {
    key: 'u',
    normal: {
      base: 'undo | count',
      alt: 'move backward in history | ↑← count',
      ctrl: 'scroll half a page up | ↑ count',
    },
    insert: {
      ctrl: 'commit changes up to now as a single undo group',
    },
    object: {
      base: 'argument | object',
    },
    combine: {
      base: 'union',
    },
  },
  {
    key: 'U',
    normal: {
      base: 'redo | count',
      alt: 'move forward in history | ↓→ count',
    },
  },
  {
    key: 'v',
    normal: {
      base: 'enter view mode | count',
    },
    insert: {
      ctrl: 'insert raw keystroke',
    },
    prompt: {
      ctrl: 'insert raw keystroke',
    },
    view: {
      base: 'center cursor vertically',
    },
  },
  {
    key: 'V',
    normal: {
      base: 'lock view mode',
    },
  },
  {
    key: 'w',
    normal: {
      base: 'select to next word start | → count',
      alt: 'select to next WORD start | → count',
    },
    prompt: {
      ctrl: 'go to next word start | →',
    },
    object: {
      base: 'word | object',
    },
  },
  {
    key: 'W',
    normal: {
      base: 'extend to next word start | → count',
      alt: 'extend to next WORD start | → count',
    },
    object: {
      base: 'WORD | object',
    },
  },
  {
    key: 'x',
    normal: {
      base: 'select line | count',
      alt: 'extend selections to whole lines',
    },
    insert: {
      ctrl: 'choose completion mode',
    },
    prompt: {
      alt: 'delete under cursor',
    },
  },
  {
    key: 'X',
    normal: {
      base: 'extend line | ↓ count',
      alt: 'crop selections to whole lines',
    },
  },
  {
    key: 'y',
    normal: {
      base: 'yank | register',
    },
  },
  {
    key: 'Y',
  },
  {
    key: 'z',
    normal: {
      base: 'restore selections | register',
      alt: 'combine selections from register',
    },
  },
  {
    key: 'Z',
    normal: {
      base: 'save selections | register',
      alt: 'combine selections to register',
    },
  },
  {
    key: '!',
    normal: {
      base: 'insert command output | register',
      alt: 'append command output | register',
    },
  },
  {
    key: '$',
    normal: {
      base:
        'pipe each selection through shell command and keep the ones whose command succeed | register',
    },
  },
  {
    key: '|',
    normal: {
      base:
        'pipe each selection through filter and replace with output | register',
      alt: 'pipe each selection through filter and ignore output | register',
    },
    register: {
      base: 'shell command',
    },
  },
  {
    key: '&',
    normal: {
      base: 'align cursors',
      alt: 'copy indentation',
    },
  },
  {
    key: '@',
    normal: {
      base: 'convert tabs to spaces',
      alt: 'convert spaces to tabs',
    },
    register: {
      base: 'macro',
    },
  },
  {
    key: '<',
    normal: {
      base: 'deindent | ← count',
      alt: 'deindent not including incomplete indent | ←',
    },
    object: {
      base: 'angle block | object',
    },
    combine: {
      base: 'leftmost cursor',
    },
  },
  {
    key: '>',
    normal: {
      base: 'indent | → count',
      alt: 'indent including empty lines | →',
    },
    object: {
      base: 'angle block | object',
    },
    combine: {
      base: 'rightmost cursor',
    },
  },
  {
    key: '%',
    normal: {
      base: 'select whole buffer',
    },
    register: {
      base: 'buffer name',
    },
  },
  {
    key: "'",
    normal: {
      base: 'rotate main selection forward | →',
      alt: 'rotate main selection backward | ←',
    },
    object: {
      base: 'single quote string | object',
    },
  },
  {
    key: '"',
    normal: {
      base: 'choose register',
      alt: 'rotate selections contents forward | →',
    },
    register: {
      base: 'yank / paste',
    },
    object: {
      base: 'double quote string | object',
    },
  },
  {
    key: ';',
    normal: {
      base: 'reduce to cursor',
      alt: 'flip selection direction',
    },
    insert: {
      alt: 'escape to normal mode for single command',
    },
  },
  {
    key: '*',
    normal: {
      base: 'set search register to main selection content | register',
      alt:
        'set search register to main selection content (do not detect word) | register',
    },
  },
  {
    key: '/',
    normal: {
      base: 'select next given regex match | → jump register',
      alt: 'select previous given regex match | ← jump register',
    },
    register: {
      base: 'search',
    },
  },
  {
    key: '?',
    normal: {
      base: 'extend with next given regex match | → jump register',
      alt: 'extend with previous given regex match | ← jump register',
    },
  },
  {
    key: '[',
    normal: {
      base: 'select to object start | ←',
      alt: 'select to inner object start | ←',
    },
    object: {
      base: 'brackets block | object',
    },
  },
  {
    key: ']',
    normal: {
      base: 'select to object end | →',
      alt: 'select to inner object end | →',
    },
    object: {
      base: 'brackets block | object',
    },
  },
  {
    key: '{',
    normal: {
      base: 'extend to object start | ←',
      alt: 'extend to inner object start | ←',
    },
    object: {
      base: 'braces block | object',
    },
  },
  {
    key: '}',
    normal: {
      base: 'extend to object end | →',
      alt: 'extend to inner object end | →',
    },
    object: {
      base: 'braces block | object',
    },
  },
  {
    key: '(',
    object: {
      base: 'parenthesis block | object',
    },
  },
  {
    key: ')',
    object: {
      base: 'parenthesis block | object',
    },
  },
  {
    key: '`',
    normal: {
      base: 'convert to lower case',
      alt: 'swap case',
    },
    object: {
      base: 'grave quote string',
    },
  },
  {
    key: '~',
    normal: {
      base: 'convert to upper case',
    },
  },
  {
    key: ',',
    normal: {
      base: 'user mappings',
    },
  },
  {
    key: '.',
    normal: {
      base: 'repeat last insert command',
    },
    goto: {
      base: 'last buffer change | jump',
    },
    register: {
      base: 'selection content',
    },
  },
  {
    key: '\\',
    normal: {
      base: 'disable hooks',
    },
  },
  {
    key: ':',
    normal: {
      base: 'enter command prompt',
      alt: 'ensure cursor is after anchor',
    },
    register: {
      base: 'last entered command',
    },
  },
  {
    key: '#',
    register: {
      base: 'selection index',
    },
  },
  {
    key: '^',
    register: {
      base: 'mark',
    },
  },
  {
    key: '_',
    register: {
      base: 'null',
    },
  },
  {
    key: '=',
    normal: {
      base: '',
    },
  },
  {
    key: '-',
    combine: {
      base: 'shortest',
    },
  },
  {
    key: '+',
    combine: {
      base: 'longest',
    },
  },
  {
    key: 'Up',
    normal: {
      base: 'move up | ↑ count',
    },
    insert: {
      base: 'move up | ↑',
    },
    prompt: {
      base: 'previous history entry | ↑←',
    },
  },
  {
    key: 'Down',
    normal: {
      base: 'move down | ↓ count',
    },
    insert: {
      base: 'move down | ↓',
    },
    prompt: {
      base: 'next history entry | ↓→',
    },
  },
  {
    key: 'Left',
    normal: {
      base: 'move left | ← count',
    },
    insert: {
      base: 'move left | ←',
    },
    prompt: {
      base: 'move left | ←',
    },
  },
  {
    key: 'Right',
    normal: {
      base: 'move right | → count',
    },
    insert: {
      base: 'move right | →',
    },
    prompt: {
      base: 'move right | →',
    },
  },
  {
    key: 'Home',
    normal: {
      base: 'select to line start | ←',
    },
    insert: {
      base: 'go to line start | ←',
    },
  },
  {
    key: 'End',
    normal: {
      base: 'select to line end | →',
    },
    insert: {
      base: 'go to line end | →',
    },
  },
  {
    key: 'PageUp',
    normal: {
      base: 'scroll one page up | ↑ count',
    },
  },
  {
    key: 'PageDown',
    normal: {
      base: 'scroll one page down | ↓ count',
    },
  },
  {
    key: 'Space',
    normal: {
      base: 'remove all selections except main',
      alt: 'remove main selection',
    },
    object: {
      base: 'whitespaces | object',
    },
  },
  {
    key: 'Backspace',
    normal: {
      base: 'remove count',
    },
    insert: {
      base: 'delete char before cursor',
    },
    prompt: {
      base: 'delete char before cursor',
    },
  },
  {
    key: 'Delete',
    insert: {
      base: 'delete char under cursor',
    },
    prompt: {
      base: 'delete char under cursor',
    },
  },
  {
    key: 'Return',
    prompt: {
      base: 'validate',
    },
  },
  {
    key: 'Escape',
    normal: {
      base: 'end macro recording',
    },
    insert: {
      base: 'leave insert mode',
    },
    prompt: {
      base: 'leave prompt',
    },
    goto: {
      base: 'leave goto mode',
    },
    view: {
      base: 'leave view mode',
    },
    object: {
      base: 'cancel',
    },
    register: {
      base: 'cancel',
    },
    combine: {
      base: 'cancel',
    },
  },
]

// top form

let query = ''
const queries = [
  'move',
  'extend',
  'select ',
  'insert',
  'jump',
  'scroll',
  'buffer',
  'line',
  'word',
  'char',
  'cursor',
  'object',
  'count',
  'register',
  '←',
  '→',
  '↑',
  '↓',
]

const search = ({ target }) => {
  query = target.value
  refresh()
}

const modes = {
  normal: ['base', 'alt', 'ctrl'],
  insert: ['base', 'alt', 'ctrl'],
  prompt: ['base', 'alt', 'ctrl'],
  goto: ['base'],
  view: ['base'],
  object: ['base'],
  register: ['base'],
  combine: ['base'],
}

const getKeysCount = (mode, modKey) =>
  keys.filter(k => k[mode] && k[mode][modKey]).length

const hiddenCols = new Set(['insertbase', 'insertalt', 'promptbase'])

// checkbox click
const toggleCol = col => {
  hiddenCols.has(col) ? hiddenCols.delete(col) : hiddenCols.add(col)
  refresh()
}

let alwaysDisplay = false

const toggleLines = () => {
  alwaysDisplay = !alwaysDisplay
  refresh()
}

const shouldDisplayKey = key => {
  return (
    alwaysDisplay ||
    Object.keys(key)
      .filter(k => k !== 'name')
      .some(m => Object.values(key[m]).some(v => v.match(query)))
  )
}

// react

const Form = () =>
  h(
    'form',
    {},
    h(
      'label',
      {},
      'Search:',
      h('input', {
        type: 'search',
        placeholder: 'query',
        onChange: search,
        value: query,
      }),
    ),
    h(
      'label',
      {},
      'Hide non matching lines:',
      h('input', {
        type: 'checkbox',
        onChange: toggleLines,
        checked: !alwaysDisplay,
      }),
    ),
    h(
      'span',
      {},
      h('label', {}, 'Example queries:'),
      queries.map(q =>
        h(
          'span',
          {
            className: 'query',
            key: q,
            onClick: () => search({ target: { value: q } }),
          },
          q,
        ),
      ),
    ),
  )

const Th = ({ mode, modKey }) => {
  return h(
    'th',
    { key: modKey },
    h(
      'label',
      {},
      modKey,
      h('input', {
        type: 'checkbox',
        onChange: () => toggleCol(mode + modKey),
        checked: !hiddenCols.has(mode + modKey),
        title: getKeysCount(mode, modKey),
      }),
    ),
  )
}

const Thead = () =>
  h(
    'thead',
    {},
    h(
      'tr',
      {},
      h('th'),
      Object.entries(modes).map(([m, v]) =>
        h('th', { key: m, colSpan: v.length }, m),
      ),
    ),
    h(
      'tr',
      {},
      h('th'),
      Object.entries(modes).map(([m, v]) =>
        v.map(v => h(Th, { mode: m, modKey: v })),
      ),
    ),
  )

const Td = ({ k, mode, modKey }) => {
  const text = (k[mode] && k[mode][modKey]) || ''
  const hidden = hiddenCols.has(mode + modKey) || !text.match(query)
  const [def, tags, primitives] = text.split('|')
  return h(
    'td',
    { key: modKey, className: k[mode] && k[mode][modKey] ? 'exist' : '' },
    !hidden && def && h('div', {}, def),
    !hidden && tags && h('div', { className: 'tags' }, !hidden && tags),
    !hidden && primitives && h('div', { className: 'tags' }, !hidden && primitives),
  )
}

const Tbody = () =>
  h(
    'tbody',
    {},
    keys.map(
      k =>
        shouldDisplayKey(k) &&
        h(
          'tr',
          { key: k.key },
          h('th', {}, k.key),
          Object.entries(modes).map(([m, v]) =>
            v.map(v => h(Td, { k, mode: m, modKey: v })),
          ),
        ),
    ),
  )

const Table = () => h('table', {}, h(Thead), h(Tbody))

const App = () => h('div', {}, h(Form), h(Table))

const refresh = () => ReactDOM.render(h(App), document.getElementById('mount'))

refresh()
