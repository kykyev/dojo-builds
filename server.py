from flask import Flask
from werkzeug.wsgi import SharedDataMiddleware
from os.path import join as joinpath, dirname
from functools import partial

Z = partial(joinpath, dirname(__file__))

app = Flask(__name__)

app.wsgi_app = SharedDataMiddleware(app.wsgi_app,
            {
                '/dojolib': Z('./lib/dojotoolkit'),
                '/olesk': Z('./lib/olesk'),
                '/d3': Z('./lib/d3'),
                '/': Z('.')
            },
            cache=False,
            cache_timeout=0
      )

if __name__ == "__main__":
    app.run(debug=True)
