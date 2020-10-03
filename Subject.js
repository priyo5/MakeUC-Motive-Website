class Subject{
    constructor(SubjectID, SubjectName, SubjectColour/*possibly add array to do to for todo list*/)
    {
        this.SubjectID = SubjectID;
        this.SubjectName = SubjectName;
        this.SubjectColour = SubjectColour;
    }
    set ID (inSID)
    {
        this.SubjectID = inSID;
    }
    get ID()
    {
        return this.SubjectID;
    }
    set SubName(inSubName)
    {
        this.SubjectName = inSubName;
    }
    get SubName()
    {
        return this.SubjectName;
    }
    set colour(inCol)
    {
        this.SubjectColour = inCol;
    }
    get colour()
    {
        return this.SubjectColour;
    }
}
