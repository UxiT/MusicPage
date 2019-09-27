import re

S = "Go to Hell, For Heaven's Sake"

pattern = r"\s"

S = re.sub(pattern,'_',S)

print(re.sub(r"'", '', S))