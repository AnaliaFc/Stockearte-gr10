export const temaTabla = {

    HeaderCell: `
      font-size: 15px;
      text-align: center;
    `,
      BaseCell: `
      font-size: 14px;
      border-right: 1px solid #a0a8ae;
      border-bottom: 1px solid #a0a8ae;
      
      padding-top: 0px;
      padding-bottom: 0px;

      & > div {
        padding-right: 0px;
        padding-left: 0px;
      }
    `,
      HeaderRow: `
        background-color: #C2EFDF;
      `,
      Row: `
        &:nth-of-type(odd) {
          background-color: ##c8e9cdce;
        }

        &:nth-of-type(even) {
          background-color: #97FDCA;
        }
      `,
};

