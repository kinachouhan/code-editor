import { Link } from "react-router"
import { Footer } from "./src/components/Footer"
import CodeMirror from "@uiw/react-codemirror"
import { useEffect, useMemo, useState } from "react"
import { html as htmlExtension } from "@codemirror/lang-html"
import { css as cssExtension } from "@codemirror/lang-css"
import { javascript } from "@codemirror/lang-javascript"
import { autocompletion, ifNotIn } from "@codemirror/autocomplete"
import toast from "react-hot-toast"


export const CodeEditor = () => {

  const [htmlCode, setHtmlCode] = useState("<div> Hello world!! </div>")
  const [cssCode, setCssCode] = useState("body { font-family: sans-serif; }")
  const [jsCode, setJsCode] = useState(`console.log("Welcome!!")`)
  const [activeTab, setActiveTab] = useState("html")
  const [output, setOutput] = useState("")


  const combinedOutput = `
      <html>
         <head>
           <style>${cssCode}</style>
         </head>
         <body>
            ${htmlCode}
            <script>${jsCode}</script>
         </body>
      </html>
      `

  const updateOutput = () => {
    setOutput(combinedOutput)
  }

  useEffect(() => {
    updateOutput()
  }, [htmlCode, cssCode, jsCode])

  const htmlExtensions = useMemo(() => [htmlExtension(), autocompletion()], [])
  const cssExtensions = useMemo(() => [cssExtension(), autocompletion()], [])
  const jsExtensions = useMemo(() => [javascript(), autocompletion()], [])

  const getExtension = (language) => {
    if (language === "html") {
      return htmlExtensions
    }
    if (language === "css") {
      return cssExtensions
    }
    if (language === "js") {
      return jsExtensions
    }
    return []
  }

  const saveProject = () => {
    const blob = new Blob([combinedOutput], { type: "text/html" })

    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "project.html"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast.success("Project saved successfully")
  }


  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <header className="sticky top-0 z-20 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between">

            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-black text-white text-2xl font-bold p-2 px-4">
                D
              </div>
              <Link
                to="/"
                className="text-lg font-semibold tracking-wide text-gray-900"
              >
                DevSync
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={saveProject}
                className="rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition"
              >
                Save Project
              </button>
            </div>

          </div>
        </div>
      </header>


      <main className="flex-1 overflow-hidden bg-gray-100">
        <div className="h-full overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 lg:p-0">

          {/* LEFT: CODE EDITOR */}
          <div className="bg-white flex flex-col m-2 lg:m-8 p-4 overflow-hidden rounded-md">

            {/* Tabs */}
            <div className="flex gap-4 mb-2 shrink-0 flex-wrap">
              {["html", "css", "js"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded shadow
              ${activeTab === tab ? "bg-black text-white" : "bg-gray-100"}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Editor (scrollable) */}
            <div className="flex-1 overflow-auto mt-2">
              <CodeMirror
                value={
                  activeTab === "html"
                    ? htmlCode
                    : activeTab === "css"
                      ? cssCode
                      : jsCode
                }
                onChange={(value) => {
                  if (activeTab === "html") setHtmlCode(value)
                  if (activeTab === "css") setCssCode(value)
                  if (activeTab === "js") setJsCode(value)
                }}
                extensions={getExtension(activeTab)}
                className="h-full border border-gray-300 rounded-md"
              />
            </div>
          </div>

          {/* RIGHT: OUTPUT */}
          <div className="bg-white flex flex-col m-2 lg:m-8 p-4 overflow-hidden rounded-md">

            {/* Title (fixed) */}
            <h1 className="text-xl lg:text-2xl font-semibold text-center shrink-0">
              Output
            </h1>

            {/* Output iframe (scrollable) */}
            <div className="flex-1 overflow-auto mt-4 border rounded-md">
              <iframe
                title="output"
                srcDoc={output}
                className="w-full h-full border-none"
              />
            </div>
          </div>

        </div>
      </main>


      <Footer />

    </div>
  )
}