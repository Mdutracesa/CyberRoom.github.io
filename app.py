from flask import Flask, render_tempate

app=Flask(__name__)

@app.route('/')
def index():
    title = "CryptoNewsRSA"
    Crypto_Currencies = [
        "Bitcoin",
        "Litecoin",
        "Cardano",
        "PolygonMatic",
    ]
    return render_tempate('index.html', title=title, Crypto_Currencies = Crypto_Currencies)

if __name__ == '__main__':
    app.run()
