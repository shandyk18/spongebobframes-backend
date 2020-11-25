from bs4 import BeautifulSoup

import requests
import urllib.request
import shutil

url = "https://www.facebook.com/media/set/?vanity=EverySpongeInOrder&set=a.2163939183725382"
response = requests.get(url)

soup = BeautifulSoup(response.text, "html.parser")
# TODO: get the right tags for the images
aas = soup.find_all("body")

print(aas)