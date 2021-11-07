import styled from 'styled-components';

export const AreaHeader = styled.div`
    height: 60px;
    background-color: #791E94;
    color: #fff;

    .container{
        padding: 5px 20px;
        display: flex;
        align-itens: center;
    }

    .logo{
        flex: 1;

        img{
            width: 45px;
        }
    }

    nav{
        ul{
            display: flex;
        }
        li{
            list-style: none;
            margin-left: 21px
        }

    }
`;
