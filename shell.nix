{ pkgs ? import <nixpkgs> { } }:

pkgs.mkShell {
  name = "react_vite";
  buildInputs = with pkgs; [ nodejs_22 yarn-berry typescript  ];

  shellHook = let pathInit = "./.init_metolorgy";
  in ''
    export BROWSER=chromium
    alias rn="yarn run dev"
        push() {
            while [[ "$#" -gt 0 ]]; do
        case $1 in
          -m|--message) # Флаг для указания файла
            message="$2"
            shift
            ;;
          -h|--help) # Флаг для помощи
            echo "Передайте обязательный параметр -m или --message, который являеться описанием вашего коммита."
            return
            ;;
          *) 
            echo "Неизвестный параметр: $1"
            return 1
            ;;
        esac
        shift
      done 

      git add .
      git commit -m "$message"
        }

      shadcn() {
        NC="\033[0m"
        Green="\033[0;32m"
        yarn add tailwindcss @tailwindcss/vite
        yarn add -D @types/node
        npx shadcn@latest init
        echo "$''${Green}$''${NC} Shadcn комманды запущены. Отредактируйте файлы которые написаны в документации shadcn вручную."


      }
        if [ ! -f ${pathInit} ]; then
          yarn create vite . --force
          #yarn install 
          read -p "Использовать UI библиотеки Shadcn (y/n)" shadcn
          if [ "$shadcn" = "y" ]; then
            shadcn
          fi
          touch "${pathInit}"
          yarn run dev
        else 
          yarn install
#          yarn run dev
        fi
  '';

}

