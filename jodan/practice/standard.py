import requests
import json

url = "https://kauth.kakao.com/oauth/token"

data = {
    "grant_type" : "authorization_code",
    "client_id" : "<REST_API 앱키를 입력하세요>",
    "redirect_uri" : "https://localhost.com",
    "code"         : "<step2에서 발급받은 code를 입력하세요>"
    
}
response = requests.post(url, data=data)

tokens = response.json()

print(tokens)