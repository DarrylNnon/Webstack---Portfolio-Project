# app.py (Python backend using Flask)
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/write', methods=['POST'])
def write_file():
    try:
        data = request.json.get('content', 'default content')
        with open('test.txt', 'w') as file:
            file.write(data)
        return jsonify({"message": "File written successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

