class User{
    constructor(fName, sName, ID, email, password)
    {
        this.fName = fName;
        this.sName = sName;
        this.ID = ID;
        this.email = email;
        this,password = password;
    }
    set firstname(inFname){
        this.fName = inFname;
    }
    get firstname()
    {
        return this.fName;
    }
    set surname(inSname)
    {
        this.sName  =inSname;
    }
    set IDen(inID)
    {
        this.ID = inID;
    }
    get IDen()
    {
        return this.ID;
    }
    set mail(inEmail)
    {
        this.email = inEmail;
    }
    get mail()
    {
        return this.email;
    }
    set pass (inPass)
    {
        this.password = inPass;
    }
    get pass()
    {
        return this.password;
    }

}