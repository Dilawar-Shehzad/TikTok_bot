import time
from selenium.webdriver.common.by import By
from selenium.webdriver import Keys
import os
from selenium.webdriver.common.action_chains import ActionChains
import os
import random
import undetected_chromedriver as uc
import gspread
from oauth2client.service_account import ServiceAccountCredentials
import json

#Initializing access to the google sheet containing all the usernames
scope = [
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/drive.file'
            ]
    
json_data="""{
  "type": "service_account",
  "project_id": "instaproject-373319",
  "private_key_id": "91534ea45536d2976998eb5932c0d578e42efba1",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCfC5PaDBSjAbNc\nqz2NgQzj47iU1sTgoZRfwZiFQ+kb2nzIpeAeXgfxlf5bTqpnIJep4dziBxbqbCmO\ntkPEHobo5BqIZJKyPsHlKpnvfaSx8k5nVIntmGnxPi3qdCFaSWJ/I2tsJVFR+Ucr\n7CbYzURt8/3ZBTtnCjDZjwH6O0gcG/BXheaTjoWsJstOA2VsW3MMQQNSBTHpUHNk\n0QC5FVds7GP62U4DSg9ruWWoALsz2tFR9q5Ol0ZqqZ5VGcI5vJPcXRjyUOxVVtRo\nmkpRo2OI7YHaSkSTok2Mast1+quvodePTutzNG4LVHjKY6pa2l3P9xiVnT5acYE7\n4n1epoJ1AgMBAAECggEABeuQ59tuQzkTe54WLvfASpVV8BhkgLYTB1N2AXPrL/G8\nll1yT78RTaFXM//kIO2aJ6U0Kye3Zyd6jojjUeAPBolDIZOY0FC8t/KTg1IqeMM7\nvuXrMnBrdSLq46DKAwnbRD9FxuNGuSXty8lBEu3lH7Cm4NashOPguKB1ouJlB0LF\n8nXNKwiwTvi0OesXKp2rhBQc/xvyOEatoE5jWjc2QrgWfR91lbVZkEspnpN+PJpT\n589F0YmRtOa9E6f9AJcE4sCgsGNwdiVfab2V5Y/1xJQAjyLZcoO2LpyR+GJFR67H\nrvKSOmlsxiGVMhW1byR+4OcnszYKl6e/XkD+r9aWwQKBgQDQNoohwQ3MV7LfMjSk\n9mDEdevBef3DtdEV+PR+OL4WMBE1emJ74NgRozdSBg7ltIrYREcbv504W3XR9YiL\nQfFdDnbZ/wIw2i/d2GxrsGNM/JZIXZbjScKSduQYz9CHqLfWJUzkTfDzjD3lzp94\njDHIzm2IG2/Bz7r7rTu966TAIQKBgQDDjDSh8njRSrEvrUXm2Nl0bLYA6ljUO0YU\nBIwBJwfRbo+admU4v3ESIF8JN/Gky5i/X/CRr7rNoS3Rrw1XcEMcLHLRjJxZ02x6\nuQA03+oOM5YENz2GMGjQTOhjUdIG29SByKL8mdXZg2feNSA5e8N/MHEaRuOuoT1C\n+RMNOhnH1QKBgQCOWmuQblRHvEHwNXwmuMgqKdE443XrQ7ijBCXs0lCsDMsHPBhv\nR6eST3v4GWpABHLVL8FKKHSOXoGsPenQBBLII6aAnsfZrKMDUv+1lNAfh6Yb7djG\nptxflOeYSyTwSxr9T11FzkAJ031STDVdjsRO3UunvdJnuOXHQoZQ7/Yg4QKBgERD\nR4RZPq/hISWBmWtSu+aWpJqBNG0yG+6U/8LPOz1zGRJUzlUXD4PCZSq0qthacoIs\nHbDd5Zou7+3I7CFgAS1uns5kBZid47qbpmTO3cgDXhUuq32SnKRKlL1HLMhUKUT9\nI1iG405BPxsk9JDckYxu/qyrnoOxqc8dX/c4FxPZAoGBAJoslEcmVcCXneP+RJAx\nzKwXbSedKYiewLVYdeulUMKe2SE9rDwC1pciemv+xaiLJs95JGC1AKiT3SLlqOSM\ntZAQj5CXI12A9bnFU5TLMMGsvoFmmW4VmEzUUa8OOyjm277seeVU34ijZohC6bix\nm7Ta7O3tHarVn6aS+ehcmax9\n-----END PRIVATE KEY-----\n",
  "client_email": "instapythonsheet@instaproject-373319.iam.gserviceaccount.com",
  "client_id": "104672116464740290723",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/instapythonsheet%40instaproject-373319.iam.gserviceaccount.com"
  
}"""
json_key = json.loads(json_data,strict=False)
creds=ServiceAccountCredentials.from_json_keyfile_dict(json_key)                                                     
client = gspread.authorize(creds)

sheet = client.open('TikTokUserList').sheet1

#Reading comments file
with open("comments.txt","r",  encoding="utf8") as f:
    comments=f.readlines()

#Reading accounts file for the accounts to follow
with open("accounts.txt","r",  encoding="utf8") as f:
    accounts=f.readlines()

#Organic looking click function
def clickfunc(d,el):
    try:
        action=ActionChains(d)
        action.move_to_element(el).perform()
        time.sleep(1)
        action.move_to_element(el).click().perform()
    except:
        pass
    return d

#Random decision making function
def decide(s):
    check=random.randint(0,100)
    if int(check<int(s)):
        return True
    else:
        return False

#Starting the chrome profile number 1 on which the account is already logged in
sysname=os.getlogin()
options=uc.ChromeOptions()
options.add_argument(f"user-data-dir=C:\\Users\\{sysname}\\AppData\\Local\\Google\\Chrome\\User Data")
options.add_argument(f"--profile-directory=Profile 1")
driver=uc.Chrome(options=options)

#Getting to tiktok
driver.get("https://www.tiktok.com/")

#Reading own username
pi=driver.find_element(By.XPATH, '//*[@data-e2e="profile-icon"]')
pi.click()
vp=driver.find_element(by=By.LINK_TEXT, value="View profile")
vp.click()
account=driver.find_element(By.XPATH, '//*[@data-e2e="user-title"]')
account=account.text



driver.get("https://www.tiktok.com/")
action=ActionChains(driver)
while True:
    if "tiktok" not in driver.current_url:
        driver.get("https://www.tiktok.com/")
    time.sleep(int(random.randint(0,5)))
    action=ActionChains(driver)
    action.send_keys(Keys.PAGE_DOWN).perform()
    bluetick=driver.find_elements(By.XPATH, '//*[@class="tiktok-8jliha-SpanVerifyBadgeContainer e1aglo370"]')
    #Randomly deciding to follow a blue tick account from the timeline
    if decide(20)==True:
        clickfunc(driver,bluetick[-1])
        time.sleep(2)
        try:
            followbut=driver.find_element(By.XPATH, '//*[@class="tiktok-1h3j14u-DivFollowButtonWrapper e18e4obn4"]')
            clickfunc(driver,followbut)
            print("Followed a bluetick account")
        except:
            pass
        for q in range(int(random.randint(2,5))):
            action=ActionChains(driver)
            action.send_keys(Keys.PAGE_DOWN).perform()
            time.sleep(int(random.randint(0,3)))
        driver.back()
    #Randomly watching a video for random seconds
    if decide(20)==True:
        try:
            likebuts=driver.find_elements(By.XPATH, '//*[@data-e2e="like-icon"]')
            ln=random.randint(0,len(likebuts))
            time.sleep(int(random.randint(5,18)))
            clickfunc(driver, likebuts[ln])
            print("Watched and liked a video")
            time.sleep(5)
            #Deciding randomly to comment on a liked video
            if decide(50)==True:
                try:
                    commentbut=driver.find_elements(By.XPATH, '//*[@data-e2e="comment-icon"]')
                    clickfunc(driver, commentbut[ln])
                    time.sleep(3)
                    csec=driver.find_element(By.XPATH, '//*[@class="tiktok-1vi8qz3-DivMentionButton e1rzzhjk4"]')
                    csec.click()
                    action.send_keys(Keys.BACK_SPACE).send_keys(random.choice(comments)).perform()
                    time.sleep(2)
                    action.send_keys(Keys.RETURN).perform()
                    print("Commented on the video")
                    close=driver.find_element(By.XPATH, '//*[@aria-label="Close"]')
                    close.click()
                except:
                    pass
        except:
            pass
    #Following an ordinary account from the timeline
    if decide(10)==True:
        try:
            users=driver.find_elements(By.XPATH, '//*[@data-e2e="video-author-uniqueid"]')
            clickfunc(driver,users[int(random.randint(0,len(users)-1))])
            time.sleep(2)
            try:
                followbut=driver.find_element(By.XPATH, '//*[@class="tiktok-1h3j14u-DivFollowButtonWrapper e18e4obn4"]')
                clickfunc(driver,followbut)
                print("Followed an ordinary account")
            except:
                pass
            for q in range(int(random.randint(2,5))):
                action=ActionChains(driver)
                action.send_keys(Keys.PAGE_DOWN).perform()
                time.sleep(int(random.randint(0,3)))
            driver.back()
        except:
            pass
    #randomly commenting on a video
    if decide(20)==True:
        try:
            commentbut=driver.find_elements(By.XPATH, '//*[@data-e2e="comment-icon"]')
            clickfunc(driver, commentbut[ln])
            time.sleep(3)
            csec=driver.find_element(By.XPATH, '//*[@class="tiktok-1vi8qz3-DivMentionButton e1rzzhjk4"]')
            csec.click()
            action.send_keys(Keys.BACK_SPACE).send_keys(random.choice(comments)).perform()
            time.sleep(2)
            action.send_keys(Keys.RETURN).perform()
            print("Commented on the video")
            close=driver.find_element(By.XPATH, '//*[@aria-label="Close"]')
            close.click()
        except:
            pass
    #following the accounts in the database of text file
    if decide(3)==True:
        try:
            sb=driver.find_element(By.XPATH, '//*[@data-e2e="search-user-input"]')
            actf=random.choice(accounts)
            sb.send_keys(actf)
            atf=driver.find_element(By.XPATH, '//*[@data-e2e="search-user-unique-id"]')
            clickfunc(driver, atf)
            time.sleep(2)
            followbut=driver.find_element(By.XPATH, '//*[@class="tiktok-1h3j14u-DivFollowButtonWrapper e18e4obn4"]')
            clickfunc(driver,followbut)
            print("Followed an account from database")

            for q in range(int(random.randint(2,5))):
                action=ActionChains(driver)
                action.send_keys(Keys.PAGE_DOWN).perform()
                time.sleep(int(random.randint(0,3)))
            driver.back()
            time.sleep(2)
            driver.back()
        except:
            pass
    #following own accounts fetched from the google sheet
    if decide(5)==True:
        try:
            #Reading all the other bot accunt usernames from the google sheet
            users=sheet.col_values(1)
            users.pop(0)
            #Getting index of own account name
            for i in range(len(users)):
                if users[i]==account:
                    rowval=i
                    break
            rowval+=2

            sb=driver.find_element(By.XPATH, '//*[@data-e2e="search-user-input"]')
            actf=random.choice(users)
            sb.send_keys(actf)
            atf=driver.find_element(By.XPATH, '//*[@data-e2e="search-user-unique-id"]')
            clickfunc(driver, atf)
            time.sleep(2)
            followbut=driver.find_element(By.XPATH, '//*[@class="tiktok-1h3j14u-DivFollowButtonWrapper e18e4obn4"]')
            clickfunc(driver,followbut)
            print("Followed an account from database")
            #Updating in google sheets that this own account has been followed
            for i in range(len(users)):
                if users[i]==account:
                    pass
                else:
                    sheet.update_cell(rowval,i+2,"done")
                    time.sleep(1)
            for q in range(int(random.randint(2,5))):
                action=ActionChains(driver)
                action.send_keys(Keys.PAGE_DOWN).perform()
                time.sleep(int(random.randint(0,3)))
            driver.back()
            time.sleep(2)
            driver.back()
        except:
            pass