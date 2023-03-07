The strange thing I noticed when doing a simple read/write append files is that a simple `\n` can change the order of your output log in the terminal.
Run both the `log1.js` and `log2.js`, and you will notice the difference when the `Write complete` is logged.

Be sure to erase the `reply.txt` before you run the `log2.txt`.

My output is below:

`➜  async_terminal_log_JS git:(main) node log1.js
Hello...
Hi, my name is Meta.
Write complete
Append complete`


`➜  async_terminal_log_JS git:(main) ✗ node log2.js
Hello...
Hi, my name is Meta.
Write complete
Append complete
`
