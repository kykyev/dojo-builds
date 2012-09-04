## Example dojo custom build profiles

1. place dojo code in lib/dojotoolkit folder. (symlinks will do.)

2. from project root run 
<pre>
node  ./lib/dojotoolkit/dojo/dojo.js load=build -p profiles/min.profile.js
</pre>
3. from project root run
<pre>
python -m SimpleHTTPServer 5000
</pre>
4. locate browser to 
<pre>
http://127.0.0.1:5000/html/min.test.html
</pre>
5. investigate result in development console like Firebug