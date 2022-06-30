import { GithubLogo } from 'phosphor-react';
import { LinkedinLogo } from 'phosphor-react';

export function Footer() {
  return (
    <footer className="w-full bg-gray-700 border-t border-green-900 p-8">
      <div className="w-full flex items-center justify-center">
        <div className="flex items-center justify-center gap-8">
        
          <a href="https://github.com/luiginicoletti" target="_blank">
            <GithubLogo size={30} className="hover:text-blue-500" />
          </a>
          <span className="text-xs text-gray-200">about me</span>
          <a href="https://www.linkedin.com/in/luiginicolettipro/" target="_blank">
            <LinkedinLogo size={30} className="hover:text-blue-500" />
          </a>
        </div>
      </div>
    </footer>
  );
}
