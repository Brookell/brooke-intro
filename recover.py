import json

log_path = '/Users/brookel/.gemini/antigravity-ide/brain/427a9455-128c-4cbc-96ed-9a4110ab92e2/.system_generated/logs/transcript.jsonl'
target_file = '/Users/brookel/Desktop/游戏/5.10 个人介绍/src/components/SectionFramework.jsx'

reconstructed = False
with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            step_index = data.get('step_index', 999)
            # Only match original steps before recovery scripts were written
            if step_index < 400:
                for tc in data.get('tool_calls', []):
                    args = tc.get('args', {})
                    code = args.get('CodeContent', '') or args.get('ReplacementContent', '')
                    if 'import React' in code and 'flippedCards' in code and 'Trophy' in code and 'extendedPillars' in code:
                        # Clean double escapes from json log
                        code = code.replace('\\n', '\n').replace('\\"', '"').replace('\\\\', '\\')
                        # Remove leading/trailing quotes if they got added
                        if code.startswith('"') and code.endswith('"'):
                            code = code[1:-1]
                        
                        with open(target_file, 'w', encoding='utf-8') as tf:
                            tf.write(code)
                        print(f'Successfully restored original SectionFramework.jsx from step {step_index}!')
                        reconstructed = True
                        break
            if reconstructed:
                break
        except Exception as e:
            pass

if not reconstructed:
    print('Not found')
