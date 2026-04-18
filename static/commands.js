const COMMANDS = [{
  cmd: "more thechougala.in",
  lines: [
    "<span class=\"ansi-color-fg-default ansi-color-bg-default\">  </span>",
    "<span class=\"ansi-color-fg-5-223 ansi-color-bg-default\">  __  __           __                       __    </span>",
    "<span class=\"ansi-color-fg-5-223 ansi-color-bg-default\"> / /_/ /  ___ ____/ /  ___  __ _____ ____ _/ /__ _</span><span class=\"ansi-color-fg-default ansi-color-bg-default\">    </span><span class=\"ansi-color-fg-5-223 ansi-color-bg-default\">thechougala</span>",
    "<span class=\"ansi-color-fg-5-87 ansi-color-bg-default\">/ __/ _ \\/ -_) __/ _ \\/ _ \\/ // / _ `/ _ `/ / _ `/</span><span class=\"ansi-color-fg-default ansi-color-bg-default\">    </span><span class=\"ansi-color-fg-5-223 ansi-color-bg-default\">Aspiring Security Researcher</span>",
    "<span class=\"ansi-color-fg-5-87 ansi-color-bg-default\">\\__/_//_/\\__/\\__/_//_/\\___/\\_,_/\\_, /\\_,_/_/\\_,_/ </span><span class=\"ansi-color-fg-default ansi-color-bg-default\">    </span><span class=\"ansi-color-fg-5-223 ansi-color-bg-default\">B.E CSE | Cyber Security Analyst Intern</span>",
    "<span class=\"ansi-color-fg-5-87 ansi-color-bg-default\">                               /___/              </span><span class=\"ansi-color-fg-default ansi-color-bg-default\">    </span><span class=\"ansi-color-fg-5-87 ansi-color-bg-default\">thechougala.in</span>",
    "",

    "<span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">  </span><span class=\"ansi-color-fg-5-223 ansi-color-bg-default\">Achievements</span>",
    "",
    "<span class=\"ansi-color-fg-5-241 ansi-color-bg-default\"> </span>  <span class=\"ansi-color-fg-5-223 ansi-color-bg-default\">Research paper on </span><span class=\"ansi-color-fg-5-120 ansi-color-bg-default\">SIEM</span><span class=\"ansi-color-fg-5-223 ansi-color-bg-default\"> presented at </span><span class=\"ansi-color-fg-5-87 ansi-color-bg-default\">ICBDAIT International Conference</span>",
    "<span class=\"ansi-color-fg-5-241 ansi-color-bg-default\"> </span>  <span class=\"ansi-color-fg-5-223 ansi-color-bg-default\">Winner in multiple </span><span class=\"ansi-color-fg-5-120 ansi-color-bg-default\">Capture The Flag (CTF)</span><span class=\"ansi-color-fg-5-223 ansi-color-bg-default\"> competitions</span>",
    "",

    "<span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">┌─</span><span class=\"ansi-color-fg-5-223 ansi-color-bg-default\">About</span><span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">────────────────────────────┐   ┌─</span><span class=\"ansi-color-fg-5-223 ansi-color-bg-default\">Stack</span><span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">──────────┬──────────────────────┐</span>",

    "<span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span> <span class=\"ansi-color-fg-5-87 ansi-color-bg-default\">Hey! I'm Shivkumar Chougala      </span><span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span>   <span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span> <span class=\"ansi-color-fg-5-211 ansi-color-bg-default\">Languages  </span><span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span> <span class=\"ansi-italics ansi-color-fg-5-211 ansi-color-bg-default\">Python, Bash, Shell     </span><span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span>",

    "<span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span> <span class=\"ansi-color-fg-5-87 ansi-color-bg-default\">Currently interning at           </span><span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span>   <span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span> <span class=\"ansi-color-fg-5-211 ansi-color-bg-default\">Envs       </span><span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span> <span class=\"ansi-italics ansi-color-fg-5-211 ansi-color-bg-default\">Kali, Windows, VMs      </span><span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span>",

    "<span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span> <span class=\"ansi-color-fg-5-87 ansi-color-bg-default\">Shreshta IT as Cybersecurity     </span><span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span>   <span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span> <span class=\"ansi-color-fg-5-211 ansi-color-bg-default\">Focus      </span><span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span> <span class=\"ansi-italics ansi-color-fg-5-211 ansi-color-bg-default\">Offensive Tools, OSINT  </span><span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span>",

    "<span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span> <span class=\"ansi-color-fg-5-87 ansi-color-bg-default\">Analyst. Contributing to         </span><span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span>   <span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span> <span class=\"ansi-color-fg-5-211 ansi-color-bg-default\">Hobbies    </span><span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span> <span class=\"ansi-italics ansi-color-fg-5-211 ansi-color-bg-default\">CTF, Research, Lifting  </span><span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span>",

    "<span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span> <span class=\"ansi-color-fg-5-87 ansi-color-bg-default\">projects & building tools.       </span><span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span>   <span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span> <span class=\"ansi-color-fg-5-211 ansi-color-bg-default\">          </span><span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span> <span class=\"ansi-italics ansi-color-fg-5-211 ansi-color-bg-default\">                          </span><span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">│</span>",

    "<span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">└──────────────────────────────────┘   └──────────────────────────────────────┘</span>",

    "",

    "<span class=\"ansi-color-fg-5-241 ansi-color-bg-default\">  </span><span class=\"ansi-color-fg-5-223 ansi-color-bg-default\">Explore · Connect · Build</span>",
    "",
    "  <span class=\"ansi-color-fg-5-120 ansi-color-bg-default\">→</span> <span class=\"ansi-color-fg-5-223 ansi-color-bg-default\">Projects</span>     <span class=\"ansi-color-fg-5-87 ansi-color-bg-default\">thechougala.in/projects</span>",
    "  <span class=\"ansi-color-fg-5-120 ansi-color-bg-default\">→</span> <span class=\"ansi-color-fg-5-223 ansi-color-bg-default\">Blog</span>         <span class=\"ansi-color-fg-5-87 ansi-color-bg-default\">thechougala.in/blog</span>",
    "  <span class=\"ansi-color-fg-5-120 ansi-color-bg-default\">→</span> <span class=\"ansi-color-fg-5-223 ansi-color-bg-default\">Let's Collab</span> <span class=\"ansi-color-fg-5-87 ansi-color-bg-default\">thechougala.in/contact</span>",
    ""
  ]
}];
