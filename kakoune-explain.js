// @flow

(function () {

const insertKeys = {
	'a':     'insert [text] after selected text',
	'A':     'insert [text] at line end',
	'c':     'change selected text to [text]',
	'<a-c>': 'change selected text to [text] without yanking',
	'i':     'insert [text] before selected text',
	'I':     'insert [text] at line begin',
	'o':     'insert [text] on new line below',
	'O':     'insert [text] on new line above',
}

const promptKeys = {
	'<a-k>': 'keep selections matching regex [text]',
	'<a-K>': 'keep selections not matching regex [text]',
	's':     'select regex [text] matches in selected text',
	'S':     'split selected text on regex [text] matches',
	'/':     'select next given regex [text] match',
	'<a-/>': 'select previous given regex [text] match',
	'!':     'insert external [text] command output',
	'<a-!>': 'append external [text] command output',
	'$':     'keep selections where external [text] command succeed',
	'|':     'pipe selections through external [text] command and replace',
	'<a-|>': 'pipe selections through external [text] command and ignore',
}

const chooseKeys = {
	'f':     'select to next [text] character included',
	'F':     'extend to next [text] character included',
	'<a-f>': 'select to previous [text] character included',
	'<a-F>': 'extend to previous [text] character included',
	'g':     'go to [text]',
	'G':     'extend to [text]',
	'r':     'replace with character [text]',
	't':     'select to next [text] character',
	'T':     'extend to next [text] character',
	'<a-t>': 'select to previous [text] character',
	'<a-T>': 'extend to previous [text] character',
	'v':     'view [text]',
	'<a-z>': 'combine selections from register ([text])',
	'<a-Z>': 'combine selections to register ([text])',
	'<a-a>': 'select around object [text]',
	'<a-i>': 'select inner object [text]',
	'[':     'select to surrounding object begin [text]',
	']':     'select to surrounding object end [text]',
	'{':     'extend to surrounding object begin [text]',
	'}':     'extend to surrounding object end [text]',
	'<a-[>': 'select to inner surrounding object begin [text]',
	'<a-]>': 'select to inner surrounding object end [text]',
	'<a-{>': 'extend to inner surrounding object begin [text]',
	'<a-}>': 'extend to inner surrounding object end [text]',
}

const lockKeys = {
	'V': 'view (lock) [text]',
}

const keys = {
	'b':             'select to previous word start',
	'B':             'extend to previous word start',
	'<a-b>':         'select to previous WORD start',
	'<a-B>':         'extend to previous WORD start',
	'C':             'copy selection on next lines',
	'<a-C>':         'copy selection on previous lines',
	'd':             'delete selected text to [text]',
	'<a-d>':         'delete selected text without yanking',
	'e':             'select to next word end',
	'E':             'extend to next word end',
	'<a-e>':         'select to next WORD end',
	'<a-E>':         'extend to next WORD end',
	'g':             'go to line',
	'h':             'move left ←',
	'H':             'extend left ⇐',
	'<a-h>':         'select to line begin',
	'<a-H>':         'extend to line begin',
	'j':             'move down ↓',
	'J':             'extend down ⇓',
	'<a-j>':         'join lines',
	'<a-J>':         'join lines and select spaces',
	'k':             'move up ↑',
	'K':             'extend up ⇑',
	'l':             'move right →',
	'L':             'extend right ⇒',
	'<a-l>':         'select to line end',
	'<a-L>':         'extend to line end',
	'm':             'select to next matching character',
	'M':             'extend to next matching character',
	'<a-m>':         'select to previous matching character',
	'<a-M>':         'extend to previous matching character',
	'n':             'select next current search pattern match',
	'N':             'extend with next current search pattern match',
	'<a-n>':         'select previous current search pattern match',
	'<a-N>':         'extend with previous current search pattern match',
	'<a-o>':         'add new empty line below ↓',
	'<a-O>':         'add new empty line above ↑',
	'p':             'paste [text] after selected text',
	'P':             'paste [text] before selected text',
	'<a-p>':         'paste every yanked selection after selected text',
	'<a-P>':         'paste every yanked selection before selected text',
	'q':             'replay recorded macro ▶',
	'R':             'replace selected text with yanked text',
	'<a-R>':         'replace selected text with every yanked text',
	'<a-s>':         'split selections on line boundaries',
	'<a-S>':         'select first and last characters of each selection',
	'u':             'undo ←',
	'U':             'redo →',
	'<a-u>':         'move backward in history ←',
	'<a-U>':         'move forward in history →',
	'w':             'select to next word start',
	'W':             'extend to next word start',
	'<a-w>':         'select to next WORD start',
	'<a-W>':         'extend to next WORD start',
	'x':             'select line',
	'X':             'extend line',
	'<a-x>':         'extend selections to whole lines',
	'<a-X>':         'crop selections to whole lines',
	'y':             'yank selected text to [text]',
	'z':             'restore selections from register',
	'Z':             'save selections to register',
	'<space>':       'remove all selections except main',
	'<a-space>':     'remove main selection',
	'&':             'align selection cursors',
	'<a-&>':         'copy indentation',
	'~':             'convert to upper case in selections',
	'`':             'convert to lower case in selections',
	'<a-`>':         'swap case in selections',
	'*':             'set search pattern to main selection content',
	'<a-*>':         'set search pattern to main selection content, do not detect words',
	'%':             'select whole buffer',
	'.':             'repeat last insert command',
	'<a-.>':         'repeat last object select / character find',
	'<':             'dedent',
	'<a-lt>':        'dedent, not including incomplete indent',
	'>':             'indent',
	'<a-gt>':        'indent, including empty lines',
	")":             'rotate main selection forward →',
	"(":             'rotate main selection backward ←',
	'<a-(>':         'rotate selections content forward →',
	'<a-)>':         'rotate selections content backward ←',
	';':             'reduce selections to their cursor',
	'<a-;>':         'swap selections cursor and anchor',
	'<semicolon>':   'reduce selections to their cursor',
	'<a-semicolon>': 'swap selections cursor and anchor',
	'<a-:>':         'ensure selection cursor is after anchor',
	'\\':            'disable hooks',
	'_':             'trim selections',
	'<a-_>':         'merge continuous selections together',
	',':             'user mode',
}

function tokenize (keys) {
	return escapeB(keys)
		.replace(/<((c-.|a-.)|(c-|a-)?(ret|space|tab|lt|gt|backspace|esc|up|down|left|right|pageup|pagedown|home|end|backtab|del))>|./g, '¤$&')
		.split('¤')
		.slice(1)
}

function annotate (tokens) {
	var t // current token
	var mode = 'n'

	// insert and prompt buffers have to be separate because of oneshot <a-;>
	var insertBuffer = []
	var promptBuffer = []
	var countBuffer = []
	var lockBuffer = []

	var op

	var usingRegister = false
	var macroRecording = false
	// triggered by <a-;>
	var oneShot = false

	/* will be filled with log object like this
	{
		cancelled: bool,
		macro: bool,
		// left
		count: *
		reg: ?
		op: ?
		key: ?
		insert: *
		prompt: *
		validator: ? <ret> / <esc>
		// right
		dt: *
	} */
	var logs = []

	// shortcut
	function push(key, dt) {
		logs.push({ key, dt, macro: macroRecording })
	}

	while (t = tokens.shift()) {

		switch (mode) {

			// insert mode
			case 'i':
				if (t === '<esc>') {
					logs[logs.length - 1].validator = t
					insertBuffer = []
					mode = 'n'
				} else if (t === '<a-;>' || t === '<a-semicolon>') {
					insertBuffer = []
					push(t, 'escape to normal mode for a single command')
					mode = 'n'
					oneShot = true
					continue
				} else if (t !== '<home>' && t !== '<end>') {
					insertBuffer.push(t)
					logs[logs.length - 1].insert = insertBuffer.join('')
					continue
				}
			break

			// prompt mode
			case 'p':
				if (t === '<esc>' || t === '<ret>') {
					logs[logs.length - 1].validator = t
					logs[logs.length - 1].cancelled = t === '<esc>',
					promptBuffer = []
					mode = 'n'
				} else {
					promptBuffer.push(t)
					logs[logs.length - 1].prompt = promptBuffer.join('')
					continue
				}
			break

			// choose mode
			case 'c':
				if (!usingRegister) {
					logs.push({
						macro: macroRecording,
						op: op[0],
						prompt: t,
						dt: op[1]
					})
				} else {
					usingRegister = t
				}
				mode = 'n'
				continue

			// view lock mode
			case 'V':
				if (t === '<esc>') {
					logs[logs.length - 1].validator = t
					lockBuffer = []
					mode = 'n'
				} else {
					lockBuffer.push(t)
					logs[logs.length - 1].lock = lockBuffer.join('')
					continue
				}
			break

			// normal mode
			default:
				if (insertKeys[t]) {
					mode = 'i'
					logs.push({
						macro: macroRecording,
						op: t,
						insert: '…',
						dt: insertKeys[t],
					})
				} else if (promptKeys[t]) {
					mode = 'p'
					logs.push({
						macro: macroRecording,
						op: t,
						prompt: '…',
						dt: promptKeys[t],
					})
				} else if (chooseKeys[t]) {
					if (countBuffer.length && t === 'g') {
						push(t, keys[t])
					} else {
						op = [t, chooseKeys[t]]
						mode = 'c'
					}
				} else if (lockKeys[t]) {
					mode = 'V'
					logs.push({
						macro: macroRecording,
						op: t,
						lock: '…',
						dt: lockKeys[t],
					})
				} else if (keys[t]) {
					push(t, keys[t])
				} else if (!isNaN(Number(t)) && t !== ' ') {
					// beware of spaces: Number(' ') === 0
					countBuffer.push(t)
				} else {
					// special keys
					switch (t) {
						case '<esc>':
							push(t, 'stop macro recording ◼')
							macroRecording = false
							break

						case '"':
							usingRegister = true
							mode = 'c'
							continue

						case 'Q':
							if (macroRecording) {
								push(t, 'stop macro recording ◼')
							} else {
								push(t, 'start macro recording in [text] ⚫')
							}
							macroRecording = !macroRecording
							break

						case '<home>':
						case '<end>':
							if (insertBuffer.length) {
								logs.push({
									macro: macroRecording,
									op: op[0],
									insert: insertBuffer.join(''),
									dt: op[1]
								})
								insertBuffer = []
							}
							push(t, 'select to line ' + (t === 'home' ? 'begin' : 'end'))
							break

						default:
							console.debug('unknown token', t)
					}
				}
			break
		}

		if (oneShot) {
			oneShot = false
			mode = 'i'
			logs.push({
				macro: macroRecording,
				op: '',
				insert: insertBuffer.join(''),
				dt: 'insert [text]',
			})
		}

		// count

		if (countBuffer.length && isNaN(Number(t))) {
			logs[logs.length - 1].count = countBuffer.join('')
			countBuffer = []
		}

		// register
		if (usingRegister) {
			logs[logs.length - 1].reg = usingRegister
			usingRegister = false
		}
	}

	return {
		logs,
		mode,
		countBuffer,
	}
}

function getRegName (reg, key) {
	if (!reg) {
		switch (key) {
			case 'd':
			case 'y':
			case 'p':
			case 'P': return '" (default yank)'
			case 'q':
			case 'Q': return '@ (default macro)'
			case 'z':
			case 'Z': return '^ (default mark)'
		}
	}
	const regs = {
		'%': '% (current buffer name)',
		'.': '. (current selection contents)',
		'#': '# (selection indices)',
		'_': '_ (null)',
		'/': '/ (default search)',
		'@': '@ (default macro)',
		'^': '^ (default mark)',
		'|': '| (default shell)',
		':': ': (last entered command)',
	}
	return regs[reg] || reg
}

function getGotoName (str, key = '') {
	if (key.toLowerCase() !== 'g') return str
	const gotos = {
		'g': 'buffer top',
		'k': 'buffer top',
		'l': 'line end',
		'h': 'line begin',
		'i': 'line non blank start',
		'j': 'buffer bottom',
		't': 'window top',
		'b': 'window bottom',
		'c': 'window center',
		'a': 'last buffer',
		'.': 'last buffer change',
	}
	return gotos[str] || 'INVALID'
}

function getViewName (str, key = '') {
	if (key.toLowerCase() !== 'v') return str
	const views = {
		'v': 'center cursor vertically',
		'c': 'center cursor vertically',
		'm': 'center cursor horizontally',
		't': 'cursor on top',
		'b': 'cursor on bottom',
		'h': 'scroll left',
		'j': 'scroll down',
		'k': 'scroll up',
		'l': 'scroll right',
	}
	return views[str] || 'INVALID'
}

function getModeName (str) {
	const modes = {
		'i':'insert (type <esc> to return to normal mode)',
		'p':'prompt (type <ret> or <esc> to return to normal mode)',
		'c':'enter key',
		'V':'view lock (type <esc> to return to normal mode)',
	}
	return modes[str] || 'normal'
}

function getComboName (str) {
	const combos = {
		'a': 'append',
		'u': 'union',
		'i': 'intersection',
		'<': 'select leftmost cursor',
		'>': 'select rightmost cursor',
		'+': 'select longest',
		'-': 'select shortest',
	}
	return combos[str] || 'INVALID'
}

function escapeB (keys) {
	return keys
}

// UI

const $ = document.querySelector.bind(document)
const h = document.createElement.bind(document)

function createDl (annotations) {
	const dl = h('dl')

	annotations.forEach((a) => {
		dl.appendChild(createDt(a))
		dl.appendChild(createDd(a))
	})

	return dl
}

// left part with keys
function createDt (a) {
	const dt = h('dt')
	let kbd
	let macro

	function createKbd (c, k) {
		kbd = h('kbd')
		kbd.textContent = c
		if (k) {
			kbd.classList.add(`kbd-${k}`)
		}
		dt.appendChild(kbd)
	}

	// macro track
	if (a.key === 'Q') {
		if (a.dt.indexOf('start') !== -1) {
			macro = h('span')
			macro.textContent = '╔'
			macro.classList.add('macro')
		} else {
			macro = h('span')
			macro.textContent = '╚'
			macro.classList.add('macro')
		}
	} else if (a.macro) {
		macro = h('span')
		macro.textContent = '║'
		macro.classList.add('macro')
	}
	if (a.macro && a.key === '<esc>') {
		macro = h('span')
		macro.textContent = '╚'
		macro.classList.add('macro')
	}
	if (macro) dt.appendChild(macro)

	if (a.count) createKbd(a.count, 'count')
	if (a.reg) {
		createKbd('"')
		createKbd(a.reg, 'reg')
	}
	if (a.key) createKbd(a.key)
	if (a.op) createKbd(a.op)
	if (a.insert) createKbd(a.insert, 'insert')
	if (a.prompt) createKbd(a.prompt, 'prompt')
	if (a.lock) createKbd(a.lock, 'lock')
	if (a.validator) createKbd(a.validator, 'validator')
	// TODO handle INVALID
	if (a.cancelled) dt.classList.add('cancelled')

	return dt
}

// right part with english translation
function createDd (a) {
	var dd = h('dd')
	if (a.dt.indexOf('[text]') === -1) {
		dd.textContent = a.dt
	} else {
		var m = a.dt.split('[text]')
		var pre = h('span')
		pre.textContent = m[0]

		var text = h('em')
		text.textContent = a.insert
			|| (a.op && 'gG'.includes(a.op) && getGotoName(a.prompt, a.op))
			|| (a.op && 'v'.includes(a.op) && getViewName(a.prompt, a.op))
			|| (a.op && ['<a-z>', '<a-Z>'].includes(a.op) && getComboName(a.prompt))
			|| a.prompt || a.lock
			|| `${getRegName(a.reg, a.key)} register`

		var post = h('span')
		post.textContent = m[1]

		dd.appendChild(pre)
		dd.appendChild(text)
		dd.appendChild(post)
	}
	if (a.count) {
		if (a.key === 'g') {
			let line = h('em')
			line.textContent = a.count
			dd.appendChild(line)
		} else {
			let count = h('strong')
			count.textContent = ` (${a.count} times)`
			dd.appendChild(count)
		}
	}
	if (a.cancelled) dd.classList.add('cancelled')

	return dd
}

function render () {
	const keys = $('#keys').value.trim()
	const tokens = tokenize(keys)

	$('#total').textContent =
		tokens.length > 1
			? `${tokens.length} keys`
			: tokens.length === 1
				? '1 key'
				: 'no keys'

	const { logs, mode, countBuffer } = annotate(tokens)
	$('#mode').textContent = getModeName(mode)
	$('#count').textContent = countBuffer.join('') || 0
	$('#count-holder').style.display = (!countBuffer.length) ? 'none' : 'inline'

	const annotations = $('#annotations')
	annotations.innerHTML = ''
	annotations.appendChild(createDl(logs))

	// sharing
	window.location.hash = encodeURIComponent(keys)
}

$('#examples').onclick = function (event) {
	if (event.target.nodeName !== 'CODE') return
	$('#keys').value = event.target.textContent
	render()
}

$('#keys').onkeyup = render
$('#keys').onchange = render
if (window.location.hash)
	$('#keys').value = decodeURIComponent(window.location.hash.slice(1))

// init
render()

})()
