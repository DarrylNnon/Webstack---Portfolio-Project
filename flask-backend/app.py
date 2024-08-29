# app.py
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow CORS to enable communication between frontend and backend

@app.route('/write', methods=['POST'])
def write_file():
    try:
        # Get content from the request
        data = request.json.get('content', 'default content')
        # Write content to the file
        with open('test.txt', 'w') as file:
            file.write(data)
        return jsonify({"message": "File written successfully"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

