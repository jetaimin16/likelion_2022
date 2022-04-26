#!/usr/bin/env python
# coding: utf-8

# In[1]:


# step 2
import random

print(random.choice(["된장찌개", "피자", "제육볶음"]))


# In[3]:


# step 4
import random

for i in range(30):
    print(random.choice(["된장찌개", "치킨", "떡볶이", "라면", "감자튀김"]))


# In[4]:


# step 4
while True:
    print(random.choice(["된장찌개", "치킨", "떡볶이", "라면", "감자튀김"]))
    break
    print("이 문장도 반복되나")   


# In[6]:


# step 5
import random

lunch = random.choice(["된장찌개","피자","제육볶음"])
lunch = "냉장고"
dinner = random.choice(["김밥","쫄면","돈까스"])

print(lunch)
print(dinner)


# In[7]:


# step 6
information = {"고향":"수원", "취미":"영화관람", "좋아하는 음식":"국수"}
print(information)
print(information.get("취미"))


# In[8]:


# step 6
information = {"특기":"피아노", "사는 곳":"서울"}
print(information.get("특기"))
print(information.get("사는 곳"))


# In[16]:


# step 7
information = {"고향":"수원", "취미":"영화관람", "좋아하는 음식":"국수"}
information["특기"] = "피아노"
information["사는곳"] = "서울"

del information["좋아하는 음식"]
print(information)

print(len(information))

information.clear()
print(information)

foods = ["된장찌개", "피자", "제육볶음"]
print(foods[2])
print(foods[-1])

foods.append("김밥")
print(foods)

del foods[1]
print(foods)


# In[17]:


# step 8
for x in range(30):
    print(x)


# In[19]:


# step 8
foods = ["된장찌개", "피자", "제육볶음"]

for x in range(3):
    print(foods[x])

for x in foods:
    print(x)


# In[20]:


# step 8
information = {"고향":"수원", "취미":"영화관람", "좋아하는 음식":"국수"}
for x, y in information.items():
    print(x)
    print(y)


# In[22]:


# step 9, 10
foods = ["된장찌개", "피자", "제육볶음", "된장찌개"]
foods_set1 = set(foods)
# foods_set2 = set(["된장찌개", "피자", "제육볶음"])
print(foods)
print(foods_set1)


# In[24]:


# step 10
menu1 = set(["된장찌개", "피자", "제육볶음"])
menu2 = set(["된장찌개", "떡국", "김밥"])
menu3 = menu1 | menu2
menu4 = menu1 & menu2
menu5 = menu1 - menu2
print(menu3)
print(menu4)
print(menu5)


# In[28]:


# step 11
import random

food = random.choice(["된장찌개", "피자", "제육볶음"])
print(food)

if (food == "제육볶음"):
    print("곱배기 주세요.")
else:
    print("그냥 주세요.")
print("종료")


# # 제작하기

# In[38]:


import random
import time

lunch = ["된장찌개", "피자", "제육볶음", "짜장면"]
while True:
    item = input("음식을 추가해주세요 : ")
    if (item == "q"):
        break
    else:
        lunch.append(item)

print(lunch)
set_lunch = set(lunch)
while True:
    print(set_lunch)
    item = input("음식을 삭제해주세요 : ")
    if item == "q":
        break
    else:
        set_lunch = set_lunch - set([item])

print(set_lunch, "중에서 선택합니다.")

for i in range(5, 0, -1):
    print(i)
    time.sleep(1)

print(random.choice(list(set_lunch)))


# In[35]:


# step 14
set_lunch = set(["된장찌개", "피자", "제육볶음", "짜장면"])
item = "짜장면"
set_lunch = set_lunch - set([item])
print(set_lunch)


# In[ ]:




