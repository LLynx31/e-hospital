
import { createContext, useContext, useState} from 'react';

// Création du contexte AuthContext avec des valeurs par défaut
const AuthContext = createContext();


// Composant SessionProvider pour fournir le contexte AuthContext
export function SessionProvider(props) {
  
  const [isUser, setUser] =  useState(null)
  const [isAuthenfier, setAuthenfier] = useState(false)

  const login = async (email,password) => {
    try {

    }
    catch(e){

    }
  }

  const logout = () => {
    setAuthenfier(false)
    setUser(null)
  }

  const register = (email,password,nom,prenom,numero,adresse,photo) => {
    try {

    }
    catch(e){

    }
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        register,
        isAuthenfier,
        isUser
      }}>
      {props.children}
    </AuthContext.Provider>
  );
}


export function useAuth(){
  const value = useContext(AuthContext)
  if (!value) throw new Error("useAuth doit etre wrappé dans a l'interieur de AuthContext")

  return value
}