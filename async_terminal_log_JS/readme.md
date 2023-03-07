The strange thing I noticed when doing a simple read/write append files is that a simple `\n` can change the order of your output log in the terminal.
Run both the `log1.js` and `log2.js`, and you will notice the difference when the `Write complete` is logged.

Be sure to erase the `reply.txt` before you run the `log2.js` to get the same conditions for testing.

So to clarify, I got this output when I ran `log1.js`and `log2.js` (deleting `reply.txt` the dsecond time before running `log2.js`). The `Write complete` in the first file logged before `Hi, my name is Meta.` and in the second file it logges after.

```
➜  async_terminal_log_JS git:(main) node log1.js
Hello...
Write complete
Hi, my name is Meta.
Append complete


➜  async_terminal_log_JS git:(main) ✗ node log2.js
Hello...
Hi, my name is Meta.
Write complete
Append complete
```
