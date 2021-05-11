import React from 'react'
import styled from '@emotion/styled'
import { Content, Subtitle } from 'bloomer'

const CodeBlock = styled.pre`
  margin-top: 2em;
`

const InstallSnippet = () => {
  const snippetCode = String.raw`
    <script>
      const sendVisitToSmidgeon=async o=>{try{const t=await fetch("http://localhost:3000/api/v1/visits",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(o)});if(t.ok){return await t.json()}{const o=t.statusText;throw new Error(o)}}catch(o){console.error(o)}};window.onload=function(){const o={origin:window.location.hostname,path_visited:window.location.pathname,referring_url:document.referrer};sendVisitToSmidgeon(o)};
    </script>
  `

  return (
    <div>
      <br/>
      <Subtitle>Nice, a new site!</Subtitle>
      <p>To get Smidgeon listening for site visits, copy and paste this snippet of code before the closing <code>body</code> tag of your website.</p>
      <CodeBlock className="is-family-code">
        {snippetCode}
      </CodeBlock>
      <p>This message will disappear once you get your first page view after installing!</p>
    </div>
  )
}

export default InstallSnippet
