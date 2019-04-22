/* global React, ReactDOM */
const h = React.createElement

const keys = [
  {
    key: 'a',
    normal: {
      base: 'insert after selection | →',
      alt: 'select the whole object',
    },
    prompt: {
      ctrl: 'go to line start | ←',
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
      ctrl: 'move to previous char | ←',
      alt: 'go to previous word start | ←'
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
      alt: 'extend to previous WORD start | ← count',
    },
    prompt: {
      alt: 'go to previous WORD start | ←'
    },
    object: {
      base: 'braces block | object',
    },
  },
  {
    key: 'c',
    normal: {
      base: 'change selection content | register-" | di',
      alt: 'change selection content (not yanking) | <a-d>i',
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
      alt: 'copy selection on previous line | ↑ count opposite',
    },
  },
  {
    key: 'd',
    normal: {
      base: 'delete selection content | register-"',
      alt: 'delete selection content (not yanking)',
      ctrl: 'scroll half a page down | ↓ count',
    },
    prompt: {
      ctrl: 'delete char under cursor',
      alt: 'delete to previous word end | ←'
    },
  },
  {
    key: 'D',
    prompt: {
      alt: 'delete to previous WORD end | ←'
    },
  },
  {
    key: 'e',
    normal: {
      base: 'select to next word end | → count',
      alt: 'select to next WORD end | → count',
    },
    prompt: {
      ctrl: 'go to line end | →',
      alt: 'go to next word end | →'
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
    prompt: {
      alt: 'go to next WORD end | →'
    }
  },
  {
    key: 'f',
    normal: {
      base: 'select to next char included | → count | tL',
      alt: 'select to previous char included | ← count opposite | <a-t>H',
      ctrl: 'scroll one page down | ↓ count',
    },
    prompt: {
      ctrl: 'move to next char | →',
      alt: 'go to next word start | →',
    },
    goto: {
      base: 'included file | jump',
    },
  },
  {
    key: 'F',
    normal: {
      base: 'extend to next char included | → count | TL',
      alt: 'extend to previous char included | ← count opposite | <a-T>H',
    },
    prompt: {
      alt: 'go to next WORD start | →'
    }
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
      base: 'move left | ← count | <left>',
      alt: 'select to line start | ← | <home>',
    },
    prompt: {
      ctrl: 'delete char before cursor | ←',
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
      base: 'extend left | ← count | <s-left>',
      alt: 'extend to line start | ← | <s-home>',
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
      base: 'line non blank start | ←→',
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
      base: 'move down | ↓ count | <down>',
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
      base: 'extend down | ↓ count | <s-down>',
      alt: 'join lines and select spaces',
    },
  },
  {
    key: 'k',
    normal: {
      base: 'move up | ↑ count | <up>',
      alt: 'keep selections matching given regex',
    },
    prompt: {
      ctrl: 'delete to line end | →',
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
      base: 'extend up | ↑ count | <s-up>',
      alt: 'keep selections not matching given regex',
    },
  },
  {
    key: 'l',
    normal: {
      base: 'move right | → count | <right>',
      alt: 'select to line end | → | <end>',
      ctrl: 'clear screen',
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
      base: 'extend right | → count | <s-right>',
      alt: 'extend to line end | → | <s-end>',
    },
  },
  {
    key: 'm',
    normal: {
      base: 'select to next matching char | →',
      alt: 'select to previous matching char | ← opposite',
    },
    view: {
      base: 'center cursor horizontally',
    },
  },
  {
    key: 'M',
    normal: {
      base: 'extend to next matching char | →',
      alt: 'extend to previous matching char | ← opposite',
    },
  },
  {
    key: 'n',
    normal: {
      base: 'select next search pattern match | → count',
      alt: 'select previous search pattern match | ← count opposite',
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
      alt: 'extend with previous search pattern match | ← count opposite',
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
      ctrl: 'toggle autocompletion for this insert session',
    },
    prompt: {
      ctrl: 'toggle autocompletion for this prompt',
    },
  },
  {
    key: 'O',
    normal: {
      base: 'insert on a new line above | ↑ count opposite',
      alt: 'add an empty line above cursor | ↑ count opposite',
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
      base: 'paste before | ← opposite',
      alt: 'paste all before | ← opposite',
    },
    object: {
      base: 'paragraph | object',
    },
  },
  {
    key: 'q',
    normal: {
      base: 'replay recorded macro | count register-@',
    },
    object: {
      base: 'single quote string | object',
    },
  },
  {
    key: 'Q',
    normal: {
      base: 'start or end macro recording | register-@',
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
      ctrl: 'insert given register | register-"',
    },
    prompt: {
      ctrl: 'insert given register | register-"',
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
      base: 'select till next char | → count | fH',
      alt: 'select till previous char | ← count opposite | <a-f>L',
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
      base: 'extend to next char | → count | FH',
      alt: 'extend to previous char | ← count opposite | <a-F>L',
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
    prompt: {
      ctrl: 'delete to line start | ←',
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
      base: 'redo | count opposite',
      alt: 'move forward in history | ↓→ count opposite',
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
      ctrl: 'delete to previous word start | ←',
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
    prompt: {
      ctrl: 'delete to previous WORD start | ←',
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
      base: 'yank | register-"',
    },
    prompt: {
      ctrl: 'insert clipboard before cursor',
    },
  },
  {
    key: 'Y',
  },
  {
    key: 'z',
    normal: {
      base: 'restore selections | register-^',
      alt: 'combine selections from register | register-^',
    },
  },
  {
    key: 'Z',
    normal: {
      base: 'save selections | register-^',
      alt: 'combine selections to register | register-^',
    },
  },
  {
    key: '!',
    normal: {
      base: 'insert command output | register-|',
      alt: 'append command output | register-|',
    },
    prompt: {
      alt: 'expand the typed expansions',
    }
  },
  {
    key: '$',
    normal: {
      base:
        'pipe each selection through shell command and keep the ones whose command succeed | register-|',
    },
  },
  {
    key: '|',
    normal: {
      base:
        'pipe each selection through filter and replace with output | register-|',
      alt: 'pipe each selection through filter and ignore output | register-|',
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
      base: 'indent | → count opposite',
      alt: 'indent including empty lines | → opposite',
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
    object: {
      base: 'single quote string | object',
    },
  },
  {
    key: '"',
    normal: {
      base: 'choose register',
    },
    register: {
      base: 'yank / paste / replace',
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
      base: 'set search register to main selection content | register-/',
      alt:
        'set search register to main selection content (do not detect word) | register-/',
    },
  },
  {
    key: '/',
    normal: {
      base: 'select next given regex match | → jump register-/',
      alt: 'select previous given regex match | ← jump register-/ opposite',
    },
    register: {
      base: 'search',
    },
  },
  {
    key: '?',
    normal: {
      base: 'extend with next given regex match | → jump register-/',
      alt: 'extend with previous given regex match | ← jump register-/ opposite',
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
    normal: {
      base: 'rotate main selection backward | ←',
      alt: 'rotate selections contents backward | ←',
    },
    object: {
      base: 'parenthesis block | object',
    },
  },
  {
    key: ')',
    normal: {
      base: 'rotate main selection forward | →',
      alt: 'rotate selections contents forward | →',
    },
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
      alt: 'repeat last object / char find',
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
    normal: {
      base: 'trim',
      alt: 'merge contiguous selections together',
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
    key: '<up>',
    normal: {
      base: 'move up | ↑ count | k',
    },
    insert: {
      base: 'move up | ↑',
    },
    prompt: {
      base: 'previous history entry | ↑←',
    },
  },
  {
    key: '<s-up>',
    normal: {
      base: 'extend up | ↑ count | K',
    },
  },
  {
    key: '<down>',
    normal: {
      base: 'move down | ↓ count | j',
    },
    insert: {
      base: 'move down | ↓',
    },
    prompt: {
      base: 'next history entry | ↓→',
    },
  },
  {
    key: '<s-down>',
    normal: {
      base: 'extend down | ↓ count | J',
    },
  },
  {
    key: '<left>',
    normal: {
      base: 'move left | ← count | h',
    },
    insert: {
      base: 'move left | ←',
    },
    prompt: {
      base: 'move left | ←',
    },
  },
  {
    key: '<s-left>',
    normal: {
      base: 'extend left | ← count | H',
    },
  },
  {
    key: '<right>',
    normal: {
      base: 'move right | → count | l',
    },
    insert: {
      base: 'move right | →',
    },
    prompt: {
      base: 'move right | →',
    },
  },
  {
    key: '<s-right>',
    normal: {
      base: 'extend right | → count | L',
    },
  },
  {
    key: '<home>',
    normal: {
      base: 'select to line start | ← | <a-h>',
    },
    prompt: {
      base: 'go to line start | ←',
    },
    insert: {
      base: 'go to line start | ←',
    },
  },
  {
    key: '<s-home>',
    normal: {
      base: 'extend to line start | ← | <a-H>',
    },
  },
  {
    key: '<end>',
    normal: {
      base: 'select to line end | → | <a-l>',
    },
    prompt: {
      base: 'go to line end | →',
    },
    insert: {
      base: 'go to line end | →',
    },
  },
  {
    key: '<s-end>',
    normal: {
      base: 'extend to line end | → | <a-L>',
    },
  },
  {
    key: '<pageup>',
    normal: {
      base: 'scroll one page up | ↑ count',
    },
  },
  {
    key: '<pagedown>',
    normal: {
      base: 'scroll one page down | ↓ count',
    },
  },
  {
    key: '<space>',
    normal: {
      base: 'remove all selections except main | count',
      alt: 'remove main selection | count',
    },
    object: {
      base: 'whitespaces | object',
    },
  },
  {
    key: '<backspace>',
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
    key: '<esc>',
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
  {
    key: '<tab>',
    prompt: {
      base: 'select next completion candidate | ↓→',
    },
  },
  {
    key: '<s-tab>',
    prompt: {
      base: 'select previous completion candidate | ↑←',
    },
  },
  {
    key: '<delete>',
    insert: {
      base: 'delete char under cursor',
    },
    prompt: {
      base: 'delete char under cursor',
    },
  },
  {
    key: '<ret>',
    prompt: {
      base: 'validate',
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
  'opposite',
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
    h('a', { href: 'index.html' }, 'Kakoune explain'),
    h(
      'label',
      {},
      ' Search:',
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
  const [def, tags, primitives] = text.split(' |')
  return h(
    'td',
    { key: modKey, className: k[mode] && k[mode][modKey] ? 'exist' : '' },
    !hidden && def && h('div', {}, def),
    !hidden && tags && h('div', { className: 'tags' }, !hidden && tags),
    !hidden &&
      primitives &&
      h('div', { className: 'tags' }, !hidden && primitives),
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
