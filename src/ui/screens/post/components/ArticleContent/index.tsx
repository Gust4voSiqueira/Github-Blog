import { ArticleContentContainer } from './styles'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface IArticleContent {
  children: string
}

export function ArticleContent({ children }: IArticleContent) {
  const styleTagPre = {
    backgroundColor: '#112131',
    padding: '16px',
    borderRadius: '2px',
    border: 'none',
  }

  return (
    <ArticleContentContainer>
      <ReactMarkdown
        components={{
          code({ inline, className, children, ...props }) {
            return !inline ? (
              <SyntaxHighlighter
                {...props}
                style={oneDark}
                customStyle={styleTagPre}
                codeTagProps={{
                  style: {
                    lineHeight: '160%',
                    fontFamily: 'Fira Code',
                  },
                }}
                language="javascript"
                PreTag="div"
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <pre style={styleTagPre}>
                <code {...props} className={className}>
                  {children}
                </code>
              </pre>
            )
          },
        }}
      >
        {children}
      </ReactMarkdown>
      ,
    </ArticleContentContainer>
  )
}
