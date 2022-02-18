interface SearchableByName{
  name:string;
}

interface User extends SearchableByName{
  email:string;
}

const userA:User={
  email: "",
  name: ""
}

const userB={
  email: ""
}

function searchByName<T extends SearchableByName>( items:T[]):T[]{
  return items;
}


searchByName([userA])
searchByName([userB])
