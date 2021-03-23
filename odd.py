import json

def gen_odd():
    count=0
    start=0
    data=[]
    while count<20:
        start+=1
        if ((start%2)==1):
            data.append({"result":start})
            count+=1

    return(json.dumps(data))

def main():
    print(gen_odd())


if __name__ == "__main__":
    # execute only if run as a script
    main()