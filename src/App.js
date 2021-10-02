import React from 'react';
import Profile from './components/profile/Profile';
import { makeStyles, Typography, Box, withStyles } from "@material-ui/core";

function App() {
  const arr = [ 
    {
      position: 'Winner',
      competition: 'Monochrome'
    },
    {
      position: 'Winner',
      competition: 'Monochrome'
    },
  ]
  return (
    <Box>
      <Profile 
        imgUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAACUlJTq6urm5ua5ubn29vaQkJDNzc3f39/c3NwsLCz8/Px8fHwUFBScnJxSUlKxsbEjIyOzs7NwcHCrq6spKSk3NzfR0dGKiorw8PBBQUHGxsakpKReXl5ZWVlMTExmZmY7OzsbGxsLCwu9vb0XFxd+fn7zKP1yAAAEEklEQVR4nO3di3aqMBAFUAKIolBUoFURlWrr///hLberq60FeWRgknj2DzRnCXkxSS0LAAAAAAAAAAAAAAAAAAAAwEA7dxbnkR3l8czdcTeGnL9Ksov4dsmS1Zy7UXT86UJUWUx97qZRCCZZZbxPL5OAu4GSgnR9J19pnWud8a368bx5WN+4m9mbc2yRr7R0uJvaz6RlvtKEu7E9BNcOAYUIudvbmXfqFFCIk8fd5G52Tx0DCvGk1TzHbRojqry73M1uz3nuEVCIZ3261JdeAT9mOLoM/m2Hwb+O3E1vx+4dUAibu/FtbCQCCrHhbn6zoM1UtN5C/VdxKxVQiCl3gCaOZEAhVB8yCumEBXeE++bSAYVQe/8mIUiYcIe4R/4tLKn8JkYkCSPuGHfIjYVfXrhj1KPoZ0rq9jU0D6nKj2nfVdOtV+4gdQKigEKoOjmdkSWccUepsSJLuOKOUiMkS6jq7umSLOGSO0qNV7KEqnamNDOa0oI7SjWvzzZwtbWaW/y7M1nCs5o7/OYnNP8pNb+neYDRwvwRn27WduWOUsP8mbf5qye6FTB3klpUnWnGHaSW+TtR5u8mEm22Kbwj/AC7+uZ/mTH/6xpJX6N48XchHVDxr9wPUKlgTSUDKl9tIlsxpEPxnvFVXw9QuWdZh94BD9xNbykwvoLWcvrtnJ6VHyi+Od1L9YW4aBTQsnbdf8W1mjv5tbyum6cnzQJ+dDfddk9DbTqZH0w/2fXBKVrmK7TqY355a3N45lnfE5altCnfJeVuorS7J50zTV/AG/Npdchsq/DGaEeBm4a/142La6rRYby23H2c5nmexnsDwwEAAAAAAACACbyds5nk9jZMDsfl8ZCEWzuK9/7O03Er/7fAn+XX4lT3Ieo9K675zFf0cEWTYLMKT+3ui1pnSTrTK6a7CnvcZhamcx2e2mAeyVTvFdFc6R/TiRP5GtpFMlF0O9WP7n2g6CaLlCtQ9G26g2ufnmyFQjp512sg28lyNb6c7otB4n067LnjeTn103nrHHF2rq7s1WXtXLn6Vp+ibL2dhONTqjNevv8Zx+50vHGez5+uo76P8ej5SvFo+Vy6A7/dLEeaBORM+Ur5CPm8/jfMUjgOXsK4GXqEb3IeuJr/jTlfadAyKs5X8NuAL6MaAQeM2FhnOJqB6hn33Ll+GGRRRXMClsoQ09Rh1vF9negDqtLLfCF/FT3uRH9QLzXGXy012dIG9C7Nf3JkF9ofke5yHTq0y0XeBUU10uOYPf4xzvBI//WOz52mEuWKv8shrfFQLqOoLg+iRXnLi8wB9OFQHm1HQh5IiIRIyA8JkRAJ+SEhEiIhPyREwsdKKHsZ4jAor1jcT231TNkrMwEAAAAAAAAAAAAAAAAAAABu/AMfVksANwN8IgAAAABJRU5ErkJggg=="
        instaName="adarsh_37"
        user="Adarsh Kumar"
        positionInSociety="Member"
        nickname="envision79"
        phone="987486426"
        city="Delhi"
        email="abcd@gmail.com"
        newCompetition="Click here to join the latest competition"
        arr={arr}
      />
    </Box>
  );
}

export default App;
